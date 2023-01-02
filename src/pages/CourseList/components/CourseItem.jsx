import { Button } from "react-bootstrap";
import React from "react";
import { ButtonGroup, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import courseMiddleware from "../../../redux/middlewares/courseMiddleware";
import { EDIT_COURSE_PATH } from "../../../shared/constants/paths";
import { ListItem } from "../../../components";

function CourseItem(props) {
  const { data, onNavigate } = props;

  const dispatch = useDispatch();
  const editCourse = () => {
      dispatch(courseMiddleware.getOneCourse(data.courseId)).then(() => {
        onNavigate(EDIT_COURSE_PATH);
      });
  };
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
        <Button variant="primary" onClick={editCourse}>EDIT</Button>
        <Button variant="danger" onClick={removeCourse}>
          DELETE
        </Button>
        <Button variant="secondary">DOWNLOAD</Button>
      </ButtonGroup>
    </ListItem>
  );
}

export default React.memo(CourseItem);
