import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import {
  COURSE_MATERIAL_LIST_PATH,
  EDIT_COURSE_PATH,
} from "../../../../shared/constants/paths";
import courseMiddleware from "../../../../redux/middlewares/courseMiddleware";
import { ListItem } from "../../../../components";
import { useTheme } from "../../../../contexts/Theme";

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

  const { theme } = useTheme();

  return (
    <ListItem
      style={{
        backgroundColor: theme.accent,
        color: theme.foreground,
      }}
    >
      <div className="d-flex">
        <div className="flex-grow-1">
          <h3 className="lead">{data.title}</h3>
          <p>{data.description}</p>
        </div>
        <div>
          <ButtonGroup>
            <Button variant="primary" onClick={editCourse}>
              EDIT
            </Button>
            <Button variant="danger" onClick={removeCourse}>
              DELETE
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                onNavigate(`${COURSE_MATERIAL_LIST_PATH}/${data.id}`);
              }}
            >
              MATERIAL
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </ListItem>
  );
}

export default React.memo(CourseItem);
