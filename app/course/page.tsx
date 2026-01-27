import CardCourse from "../components/CardCourse";
import { dataCourses } from "../data/dataCourses";

export default function CoursesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {dataCourses.map((course) => (
        <CardCourse key={course.id} course={course} />
      ))}
    </div>
  );
}
