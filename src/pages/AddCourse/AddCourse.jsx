import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GenericForm, StyledContainer } from "../../components";
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

  const onNavigate = useNavigate();

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
      <GenericForm
        inputs={inputs}
        onSubmit={handleSubmit}
        onCancel={() => onNavigate(COURSE_LIST_PATH)}
        loading={isLoading}
      />
    </StyledContainer>
  );
}
