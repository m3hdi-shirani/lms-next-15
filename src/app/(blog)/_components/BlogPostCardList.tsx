import { BlogPostSummary } from "@/types/blog-post-summery.interface";
import BlogPostCard from "./BlogPostCard";

type BlogPostCardListProps = {
  posts: BlogPostSummary[];
};

const BlogPostCardList = ({ posts }: BlogPostCardListProps) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {posts?.map((post) => (
        <BlogPostCard key={`course-${post.slug}`} {...post} />
      ))}
    </div>
  );
};

export default BlogPostCardList;
