import { ListGroup } from "react-bootstrap";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import courseMiddleware from "../../redux/middlewares/courseMiddleware";

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
  getDataAction: courseMiddleware.getCourses,
  dataSelector: (state) => state.course.courseList,
  loadingSelector: (state) => state.course.loading,
  label: "Course",
});

export default CourseList;
