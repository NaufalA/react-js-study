import { Button } from "react-bootstrap";
import React from "react";
import { ButtonGroup, Col } from "react-bootstrap";
import { ListItem } from "./ListItem";
import services from "../../../services";

function CourseItem(props) {
  const { data } = props;

  const removeCourse = () => {
    if (
      window.confirm(`Are you sure you want to remove Course '${data.title}'`)
    ) {
      services.course.removeCourse(data.courseId).then((course) => {
        window.alert(`Success Remove Course with ID ${course.courseId}`);
      });
    }
  };

  return (
    <ListItem>
      <Col>
        <h3 className="lead">{data.title}</h3>
        <p>{data.description}</p>
      </Col>
      <ButtonGroup>
        <Button variant="primary">EDIT</Button>
        <Button variant="danger" onClick={removeCourse}>
          DELETE
        </Button>
        <Button variant="secondary">DOWNLOAD</Button>
      </ButtonGroup>
    </ListItem>
  );
}

export default React.memo(CourseItem);
