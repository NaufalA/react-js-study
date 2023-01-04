import { useSelector } from "react-redux";
import { GenericForm, StyledContainer } from "../../components";
import { COURSE_LIST_PATH } from "../../shared/constants/paths";
import useEditCourse from "./useEditCourse";

export default function EditCourse(props) {
  const isLoading = useSelector((state) => state.course.loading);

  const { navigate, inputs, handleChange, handleSubmit } = useEditCourse();

  return (
    <StyledContainer>
      <h1>Edit Course</h1>
      {
        <GenericForm
          inputs={inputs}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={() => navigate(COURSE_LIST_PATH)}
          loading={isLoading}
        />
      }
    </StyledContainer>
  );
}
