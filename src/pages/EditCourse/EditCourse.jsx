import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GenericForm, StyledContainer } from "../../components";
import courseMiddleware from "../../redux/middlewares/courseMiddleware";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";
import { COURSE_LIST_PATH } from "../../shared/constants/paths";
import { slugify } from "../../shared/utils/stringHelper";

export default function EditCourse(props) {
  const onNavigate = useNavigate();

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(courseMiddleware.getOneCourse(id));
    dispatch(courseTypeMiddleware.getCourseTypes(0, 0));
  }, [dispatch, id]);

  const currentCourse = useSelector((state) => state.course.currentCourse);

  const [formData, setFormData] = useState({
      title: currentCourse?.title || "",
      description: currentCourse?.description || "",
      courseType: currentCourse?.courseType.id || "",
      level: currentCourse?.courseInfo.level || 0,
      duration: currentCourse?.courseInfo.duration || 0,
  });

  useEffect(() => {
    setFormData({
      title: currentCourse?.title || "",
      description: currentCourse?.description || "",
      courseType: currentCourse?.courseType.id || "",
      level: currentCourse?.courseInfo.level || 0,
      duration: currentCourse?.courseInfo.duration || 0,
    });
  }, [currentCourse]);

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
          id: c.id,
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
      id: currentCourse.id,
      title: target.title.value,
      description: target.description.value,
      slug: slugify(target.title.value),
      courseType: { id: target.courseType.value },
      courseInfo: {
        ...currentCourse.courseInfo,
        level: target.level.value,
        duration: target.duration.value,
      },
    };

    dispatch(courseMiddleware.updateCourse(currentCourse.id, course)).then(
      () => {
        window.alert(`Success Update Course`);
        onNavigate(COURSE_LIST_PATH);
      }
    );
  };

  return (
    <StyledContainer>
      <h1>Edit Course</h1>
      {formData && (
        <GenericForm
          inputs={inputs}
          onSubmit={handleSubmit}
          onCancel={() => onNavigate(COURSE_LIST_PATH)}
          loading={isLoading}
        />
      )}
    </StyledContainer>
  );
}
