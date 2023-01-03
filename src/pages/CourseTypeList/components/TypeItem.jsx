import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ListItem } from "../../../components";
import courseTypeMiddleware from "../../../redux/middlewares/courseTypeMiddleware";
import { EDIT_COURSE_TYPE_PATH } from "../../../shared/constants/paths";

const TypeItem = (props) => {
  const { data, onNavigate } = props;

  const dispatch = useDispatch();

  const editType = () => {
    onNavigate(`${EDIT_COURSE_TYPE_PATH}/${data.id}`);
  };
  const removeType = () => {
    if (
      window.confirm(
        `Are you sure you want to remove Course Type '${data.typeName}'`
      )
    ) {
      dispatch(courseTypeMiddleware.removeCourseType(data.id)).then(() => {
        window.alert(`Success Remove Course Type`);
      });
    }
  };

  return (
    <ListItem>
      <h3 className="lead">{data?.typeName}</h3>
      <ButtonGroup>
        <Button variant="primary" onClick={editType}>
          EDIT
        </Button>
        <Button variant="danger" onClick={removeType}>
          DELETE
        </Button>
      </ButtonGroup>
    </ListItem>
  );
};

export default React.memo(TypeItem);
