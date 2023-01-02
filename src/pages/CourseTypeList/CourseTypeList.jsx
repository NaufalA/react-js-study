import React from "react";

import withPaginationList from "../../hoc/withPaginationList";

import TypeItem from "./components/TypeItem";
import { ListGroup } from "react-bootstrap";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";
import { ADD_COURSE_TYPE_PATH } from "../../shared/constants/paths";

const List = (props) => {
  const { data, onNavigate } = props;

  return (
    <ListGroup>
      {data?.map((ct, i) => (
        <TypeItem key={`course-type-${i}`} data={ct} onNavigate={onNavigate} />
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