import React from "react";

import withPaginationList from "../../hoc/withPaginationList";

import TypeItem from "./components/TypeItem";
import services from "../../services";
import { ListGroup } from "react-bootstrap";

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
  onGetData: services.courseType.getCourseTypes,
  label: "Course Type",
});

export default CourseTypeList;