import React from "react";
import { ListGroup } from "react-bootstrap";
import { withPaginationList } from "../../../hoc";
import courseTypeMiddleware from "../../../redux/middlewares/courseTypeMiddleware";
import { ADD_COURSE_TYPE_PATH } from "../../../shared/constants/paths";
import TypeItem from "./components/TypeItem";

const List = (props) => {
  const { data, onNavigate, onDelete } = props;

  return (
    <ListGroup>
      {data?.map((ct, i) => (
        <TypeItem key={`course-type-${i}`} data={ct} onNavigate={onNavigate} onDelete={onDelete} />
      ))}
    </ListGroup>
  );
};

const CourseTypeList = withPaginationList(List, {
  getDataAction: courseTypeMiddleware.getCourseTypes,
  dataSelector: (state) => state.courseType.courseTypeList,
  loadingSelector: (state) => state.courseType.loading,
  label: "Course Type",
  addPath: ADD_COURSE_TYPE_PATH
});

export default CourseTypeList;