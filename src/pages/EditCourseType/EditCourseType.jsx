import { useSelector } from "react-redux";
import { GenericForm, StyledContainer } from "../../components";
import { COURSE_TYPE_LIST_PATH } from "../../shared/constants/paths";
import useEditCourseType from "./useEditCourseType";

export default function AddCourseType(props) {
  const isLoading = useSelector((state) => state.courseType.loading);

  const { navigate, inputs, handleSubmit } = useEditCourseType();

  return (
    <StyledContainer>
      <h1>Edit Course Type</h1>
      <GenericForm
        inputs={inputs}
        onSubmit={handleSubmit}
        onCancel={() => navigate(COURSE_TYPE_LIST_PATH)}
        loading={isLoading}
      />
    </StyledContainer>
  );
}
