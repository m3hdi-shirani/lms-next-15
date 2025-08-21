import { CourseSummary } from "@/types/course-summery.interface";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = CourseSummary;
const CourseCard = ({
  title,
  coverImageId,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId!}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        {recordStatus}
        {level}
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`} className="card-title">
          {title}
        </Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between">
          {duration}

          {basePrice}
        </div>
      </div>

      <Link
        className="card-footer animated-icon justify-center"
        href={`/course/${slug}`}
      >
        مشاهده جزئیات دوره
      </Link>
    </div>
  );
};

export default CourseCard;
