import { Button } from "react-bootstrap";
import React from "react";
import { ButtonGroup, Col } from "react-bootstrap";
import { ListItem } from "../../../components/ListItem";
import { useDispatch } from "react-redux";
import courseMiddleware from "../../../redux/middlewares/courseMiddleware";

function CourseItem(props) {
  const { data } = props;

  const dispatch = useDispatch();
  const removeCourse = () => {
    if (
      window.confirm(`Are you sure you want to remove Course '${data.title}'`)
    ) {
      dispatch(courseMiddleware.removeCourse(data.courseId)).then(() => {
        window.alert(`Success Remove Course`);
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
