import { Button, Form } from "react-bootstrap";
import { FormInput, StyledContainer } from "../../components";

export default function AddCourse(props) {
  const inputs = [
    {
      title: "Title",
      type: "text",
      name: "title",
      placeholder: "Enter Course Title",
    },
    {
      title: "Description",
      type: "textarea",
      name: "description",
      placeholder: "Enter Course Description",
    },
    {
      title: "Course Type",
      type: "text",
      name: "courseTypeId",
      placeholder: "Enter Course Type",
    },
    {
      title: "Level",
      type: "number",
      name: "level",
      placeholder: "Enter Course Level",
    },
    {
      title: "Duration",
      type: "number",
      name: "duration",
      placeholder: "Enter Course Duration",
    },
    {
      title: "Course Material",
      type: "file",
      name: "material",
      placeholder: "Course Material",
    },
  ];

  const { onNavigate, onAddCourse } = props;

  const handleSubmit = (e) => {
    e.preventDefault();

    const { target } = e;

    onAddCourse({
      title: target.title,
      description: target.description,
    });
  };

  return (
    <StyledContainer>
      <Form onSubmit={handleSubmit}>
        {inputs.map((i) => (
          <FormInput
            key={`input-${i.name}`}
            title={i.title}
            type={i.type}
            name={i.material}
            placeholder={i.placeholder}
          />
        ))}
        <Button variant="danger" onClick={() => onNavigate("")}>
          Cancel
        </Button>
        <Button variant="success" type="submit">
          Save
        </Button>
      </Form>
    </StyledContainer>
  );
}