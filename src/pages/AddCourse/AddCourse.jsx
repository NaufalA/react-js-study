import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GenericForm, StyledContainer } from "../../components";
import courseMiddleware from "../../redux/middlewares/courseMiddleware";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";
import { COURSE_LIST_PATH } from "../../shared/constants/paths";
import { slugify } from "../../shared/utils/stringHelper";

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
      title: "Course Material Title",
      type: "text",
      name: "materialTitle",
      placeholder: "Enter Course Material Title",
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
      slug: slugify(target.title.value),
      courseTypeId: target.courseType.value,
      level: target.level.value.toString(),
      duration: target.duration.value.toString(),
      materialTitle: target.materialTitle.value,
      material: target.material?.files[0],
    };

    console.log(courseDto);

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
