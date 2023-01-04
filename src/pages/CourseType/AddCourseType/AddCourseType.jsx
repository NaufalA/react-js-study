import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormInput, StyledContainer } from "../../../components";
import { COURSE_TYPE_LIST_PATH } from "../../../shared/constants/paths";
import courseTypeMiddleware from "../../../redux/middlewares/courseTypeMiddleware";

export default function AddCourseType(props) {
  const inputs = [
    {
      title: "Type Name",
      type: "text",
      name: "typeName",
      placeholder: "Enter Course Type Name",
      required: true,
    },
  ];

  const onNavigate = useNavigate();

  const isLoading = useSelector((state) => state.courseType.loading);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    const { target } = e;

    dispatch(
      courseTypeMiddleware.addType({
        typeName: target.typeName.value,
      })
    ).then((res) => {
      console.log(res);
      window.alert(`Success Create new Course Type '${res.typeName}'`);
      onNavigate(COURSE_TYPE_LIST_PATH);
    });
  };

  return (
    <StyledContainer>
      <h1>Add Course Type</h1>
      <Form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
        {inputs.map((i) => (
          <FormInput
            key={`input-${i.name}`}
            title={i.title}
            type={i.type}
            name={i.name}
            placeholder={i.placeholder}
            options={i.options}
            required={i.required}
            disabled={isLoading}
          />
        ))}
        <div className="d-flex gap-2">
          <Button
            variant="danger"
            onClick={() => onNavigate(COURSE_TYPE_LIST_PATH)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button variant="success" type="submit" disabled={isLoading}>
            Save
          </Button>
        </div>
      </Form>
    </StyledContainer>
  );
}
