import { ListGroup } from "react-bootstrap";
import CourseItem from "./components/CourseItem";
import services from "../../services";
import withPaginationList from "../../hoc/withPaginationList";

const List = (props) => {
  const { data } = props;

  return (
    <ListGroup>
      {data.map((d, i) => (
        <CourseItem key={`course-item-${i}`} data={d} />
      ))}
    </ListGroup>
  );
};

const CourseList = withPaginationList(List, {
  onGetData: services.course.getCourses,
  label: "Course",
});

export default CourseList;
