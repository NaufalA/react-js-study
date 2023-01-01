import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FormInput, StyledContainer } from "../../components";
import courseMiddleware from "../../redux/middlewares/courseMiddleware";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";
import { COURSE_LIST_PATH } from "../../shared/constants/paths";

export default function AddCourse(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(courseTypeMiddleware.getCourseTypes(0, 0));
  }, [dispatch]);
  const courseTypes = useSelector(
    (state) => state.courseType.courseTypeList.data
  );
  console.log(courseTypes);

  const inputs = [
    {
      title: "Title",
      type: "text",
      name: "title",
      placeholder: "Enter Course Title",
      required: true,
    },
    {
      title: "Description",
      type: "textarea",
      name: "description",
      placeholder: "Enter Course Description",
      required: true,
    },
    {
      title: "Course Type",
      type: "select",
      name: "courseType",
      placeholder: "Enter Course Type",
      options: courseTypes?.map((c) => {
        return {
          id: c.courseTypeId,
          name: c.typeName,
        };
      }),
      required: true,
    },
    {
      title: "Level",
      type: "number",
      name: "level",
      placeholder: "Enter Course Level",
      required: true,
    },
    {
      title: "Duration",
      type: "number",
      name: "duration",
      placeholder: "Enter Course Duration",
      required: true,
    },
    {
      title: "Course Material",
      type: "file",
      name: "material",
      placeholder: "Course Material",
    },
  ];

  const { onNavigate } = props;

  const isLoading = useSelector((state) => state.course.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { target } = e;

    const courseDto = {
      title: target.title.value,
      description: target.description.value,
      courseType: { courseTypeId: target.courseType.value },
      level: target.level.value,
      duration: target.duration.value,
    };

    dispatch(courseMiddleware.addCourse(courseDto)).then(() => {
      window.alert(`Success Create new Course`);
      onNavigate(COURSE_LIST_PATH);
    });
  };

  return (
    <StyledContainer>
      <h1>Add Course</h1>
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
            onClick={() => onNavigate(COURSE_LIST_PATH)}
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
