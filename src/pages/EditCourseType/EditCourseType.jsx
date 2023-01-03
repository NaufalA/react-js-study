import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GenericForm, StyledContainer } from "../../components";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";
import { COURSE_TYPE_LIST_PATH } from "../../shared/constants/paths";

export default function AddCourseType(props) {
  const onNavigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.courseType.loading);

  const { id } = useParams();

  useEffect(() => {
    dispatch(courseTypeMiddleware.getOneCourseType(id));
  }, [dispatch, id]);

  const currentCourseType = useSelector((state) => state.courseType.currentCourseType);

  const inputs = [
    {
      title: "Type Name",
      type: "text",
      name: "typeName",
      placeholder: "Enter Course Type Name",
      defaultValue: currentCourseType?.typeName || "",
      required: true,
    },
  ];

  console.log(inputs[0].defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { target } = e;

    dispatch(
      courseTypeMiddleware.updateCourseType(currentCourseType.id, {
        ...currentCourseType,
        typeName: target.typeName.value,
      })
    ).then(() => {
      window.alert(`Success Update Course Type`);
      onNavigate(COURSE_TYPE_LIST_PATH);
    });
  };

  return (
    <StyledContainer>
      <h1>Edit Course Type</h1>
      <GenericForm
        inputs={inputs}
        onSubmit={handleSubmit}
        onCancel={() => onNavigate(COURSE_TYPE_LIST_PATH)}
        loading={isLoading}
      />
    </StyledContainer>
  );
}
