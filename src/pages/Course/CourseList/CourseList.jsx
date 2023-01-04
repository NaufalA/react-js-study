import { ListGroup } from "react-bootstrap";
import { withPaginationList } from "../../../hoc";
import courseMiddleware from "../../../redux/middlewares/courseMiddleware";
import { ADD_COURSE_PATH } from "../../../shared/constants/paths";
import CourseItem from "./components/CourseItem";

const List = (props) => {
  const { data, onNavigate, onDelete } = props;
  return (
    <ListGroup>
      {data.map((d, i) => (
        <CourseItem key={`course-item-${i}`} data={d} onNavigate={onNavigate} onDelete={onDelete} />
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
