import { Button, ButtonGroup, Col } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { EDIT_COURSE_PATH } from "../../../../shared/constants/paths";
import courseMiddleware from "../../../../redux/middlewares/courseMiddleware";
import { ListItem } from "../../../../components";

function CourseItem(props) {
  const { data, onNavigate, onDelete } = props;

  const dispatch = useDispatch();
  const editCourse = () => {
    onNavigate(`${EDIT_COURSE_PATH}/${data.id}`);
  };
  const removeCourse = () => {
    if (
      window.confirm(`Are you sure you want to remove Course '${data.title}'`)
    ) {
      dispatch(courseMiddleware.removeCourse(data.id)).then((res) => {
        window.alert(`Success Remove Course with ID ${res}`);
        onDelete();
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
        <Button variant="primary" onClick={editCourse}>
          EDIT
        </Button>
        <Button variant="danger" onClick={removeCourse}>
          DELETE
        </Button>
        <Button variant="secondary">DOWNLOAD</Button>
      </ButtonGroup>
    </ListItem>
  );
}

export default React.memo(CourseItem);
