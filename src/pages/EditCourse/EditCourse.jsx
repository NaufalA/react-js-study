import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GenericForm, StyledContainer } from "../../components";
import courseMiddleware from "../../redux/middlewares/courseMiddleware";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";
import { COURSE_LIST_PATH } from "../../shared/constants/paths";

export default function EditCourse(props) {
  const { onNavigate } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseTypeMiddleware.getCourseTypes(0, 0));
  }, [dispatch]);

  const [currentCourse] = useState(
    useSelector((state) => state.course.currentCourse)
  );

  const [formData] = useState({
    title: currentCourse.title,
    description: currentCourse.description,
    courseType: currentCourse.courseType.courseTypeId,
    level: currentCourse.courseInfo.level,
    duration: currentCourse.courseInfo.duration,
  });

  const courseTypes = useSelector(
    (state) => state.courseType.courseTypeList.data
  );
  const isLoading = useSelector((state) => state.course.loading);

  const inputs = [
    {
      title: "Title",
      type: "text",
      name: "title",
      placeholder: "Enter Course Title",
      defaultValue: formData.title,
      required: true,
    },
    {
      title: "Description",
      type: "textarea",
      name: "description",
      placeholder: "Enter Course Description",
      defaultValue: formData.description,
      required: true,
    },
    {
      title: "Course Type",
      type: "select",
      name: "courseType",
      placeholder: "Enter Course Type",
      defaultValue: formData.courseType,
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
      defaultValue: formData.level,
      required: true,
    },
    {
      title: "Duration",
      type: "number",
      name: "duration",
      placeholder: "Enter Course Duration",
      defaultValue: formData.duration,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { target } = e;

    const course = {
      ...currentCourse,
      title: target.title.value,
      description: target.description.value,
      courseType: { courseTypeId: target.courseType.value },
      courseInfo: {
        ...currentCourse.courseInfo.id,
        level: target.level.value,
        duration: target.duration.value,
      },
    };

    dispatch(
      courseMiddleware.updateCourse(currentCourse.courseId, course)
    ).then(() => {
      window.alert(`Success Update Course`);
      onNavigate(COURSE_LIST_PATH);
    });
  };

  return (
    <StyledContainer>
      <h1>Edit Course</h1>
      <GenericForm
        inputs={inputs}
        onSubmit={handleSubmit}
        onCancel={() => onNavigate(COURSE_LIST_PATH)}
        loading={isLoading}
      />
    </StyledContainer>
  );
}
