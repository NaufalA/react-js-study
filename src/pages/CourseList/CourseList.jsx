import { ListGroup } from "react-bootstrap";
import CourseItem from "./components/CourseItem";
import withPaginationList from "../../hoc/withPaginationList";
import courseMiddleware from "../../redux/middlewares/courseMiddleware";
import { ADD_COURSE_PATH } from "../../shared/constants/paths";

const List = (props) => {
  const { data, onNavigate } = props;
  return (
    <ListGroup>
      {data.map((d, i) => (
        <CourseItem key={`course-item-${i}`} data={d} onNavigate={onNavigate} />
      ))}
    </ListGroup>
  );
};

const CourseList = withPaginationList(List, {
  getDataAction: courseMiddleware.getCourses,
  dataSelector: (state) => state.course.courseList,
  loadingSelector: (state) => state.course.loading,
  label: "Course",
  addPath: ADD_COURSE_PATH
});

export default CourseList;
