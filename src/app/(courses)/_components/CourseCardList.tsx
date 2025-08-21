import { API_URL } from "@/config/global";
import { CourseSummary } from "@/types/course-summery.interface";
import CourseCard from "./CourseCard";

type CoursecardListProp = {
  courses: CourseSummary[];
};

export const dynamic = "force-dynamic";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    next: { revalidate: 24 * 60 * 60 },
  });
  return res.json();
}

const CourseCardList = async ({ courses }: CoursecardListProp) => {
  const newestCoursesData = await getNewestCourses(4);

  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCoursesData.map((course) => (
        <CourseCard key={`course-${course.slug}`} {...course} />
      ))}
    </div>
  );
};

export default CourseCardList;
