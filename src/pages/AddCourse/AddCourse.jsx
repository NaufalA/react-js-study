import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormInput, StyledContainer } from "../../components";
import services from "../../services";

export const courseTypes = [
  {
    id: "f639b9f5-1235-434e-b1f9-6024c1b88551",
    name: "FRONTEND",
  },
];

export default function AddCourse(props) {
  const inputs = [
    {
      title: "Title",
      type: "text",
      name: "title",
      placeholder: "Enter Course Title",
      required: true
    },
    {
      title: "Description",
      type: "textarea",
      name: "description",
      placeholder: "Enter Course Description",
      required: true
    },
    {
      title: "Course Type",
      type: "select",
      name: "courseType",
      placeholder: "Enter Course Type",
      options: courseTypes,
      required: true
    },
    {
      title: "Level",
      type: "number",
      name: "level",
      placeholder: "Enter Course Level",
      required: true
    },
    {
      title: "Duration",
      type: "number",
      name: "duration",
      placeholder: "Enter Course Duration",
      required: true
    },
    {
      title: "Course Material",
      type: "file",
      name: "material",
      placeholder: "Course Material",
    },
  ];

  const { onNavigate } = props;

  const [ isLoading, setLoading ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { target } = e;

    setLoading(true);

    services.course.addCourse({
      title: target.title.value,
      description: target.description.value,
      courseType: { id: target.courseType.value },
      level: target.level.value,
      duration: target.duration.value
    }).then(newCourse => {
      if (newCourse) {
        window.alert(`Success Create new Course with ID ${newCourse.courseId}`);
        setLoading(false);
        onNavigate("");
      }
    });
  };

  return (
    <StyledContainer>
      <h1>Add Course</h1>
      <Form onSubmit={handleSubmit}>
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
