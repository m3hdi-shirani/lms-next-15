import { readData } from "@/core/http-service/http-service";
import { useInfiniteQuery } from "@tanstack/react-query";
import { CourseCommentList } from "../_types/course-comment.interface";

type GetCommentsOptions = {
  params: {
    slug: string;
    page: number;
  };
};

const getComments = ({
  params,
}: GetCommentsOptions): Promise<CourseCommentList> => {
  const { slug, page } = params;
  const url = `/courses/${slug}/comments?page=${page}`;
  return readData(url);
};

export const useCourseComments = ({ params }: GetCommentsOptions) => {
  // const { data, isLoading } = useQuery({
  //   queryKey: ["courseComments"],
  //   queryFn: () => getComments({ params }),
  //   staleTime: 5 * 60 * 60 * 1000, // 5 hours
  //   gcTime: 6 * 60 * 60 * 1000, // 5 hours
  // });

  const {
    data,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["courseComments", params.slug],
    queryFn: ({ pageParam }) =>
      getComments({ params: { ...params, page: pageParam } }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    staleTime: 5 * 60 * 60 * 1000, // 5 hours
    gcTime: 6 * 60 * 60 * 1000, // 6 hours
  });

  return {
    data,
    error,
    isFetchingNextPage,
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  };
};
