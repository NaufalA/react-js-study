import { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledContainer } from "../../../components";
import courseMiddleware from "../../../redux/middlewares/courseMiddleware";
import MaterialItem from "./components/MaterialItem";

export default function CourseMaterialList(props) {
  const currentCourse = useSelector((state) => state.course.currentCourse);

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (id !== currentCourse?.id) {
      dispatch(courseMiddleware.getOneCourse(id));
    }
  }, [id, currentCourse, dispatch]);

  return (
    <StyledContainer>
      <ListGroup>
        {currentCourse?.courseMaterialList?.map((m, i) => (
          <MaterialItem key={`material-${i}`} data={m} />
        ))}
      </ListGroup>
    </StyledContainer>
  );
}
