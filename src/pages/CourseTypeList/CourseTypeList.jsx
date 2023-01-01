import React from "react";

import withPaginationList from "../../hoc/withPaginationList";

import TypeItem from "./components/TypeItem";
import { ListGroup } from "react-bootstrap";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";

const List = (props) => {
  const { data } = props;

  return (
    <ListGroup>
      {data?.map((ct, i) => (
        <TypeItem key={`course-type-${i}`} data={ct} />
      ))}
    </ListGroup>
  );
};

const CourseTypeList = withPaginationList(List, {
  getDataAction: courseTypeMiddleware.getCourseTypes,
  dataSelector: (state) => state.courseType.courseTypeList,
  loadingSelector: (state) => state.courseType.loading,
  label: "Course Type",
});

export default CourseTypeList;