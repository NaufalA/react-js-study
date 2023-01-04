import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import courseMiddleware from "../../../redux/middlewares/courseMiddleware";
import services from "../../../services";
import { COURSE_LIST_PATH } from "../../../shared/constants/paths";
import { slugify } from "../../../shared/utils/stringHelper";

const emptyFormData = {
  title: "",
  description: "",
  courseType: "",
  level: 0,
  duration: 0,
};

export default function useEditCourse() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const currentCourse = useSelector((state) => state.course.currentCourse);

  const [formData, setFormData] = useState({
    ...emptyFormData,
  });

  useEffect(() => {
    if (currentCourse && currentCourse.id === id) {
      setFormData({
        title: currentCourse?.title || "",
        description: currentCourse?.description || "",
        courseType: currentCourse?.courseType.id || "",
        level: currentCourse?.courseInfo.level || 0,
        duration: currentCourse?.courseInfo.duration || 0,
      });
    } else {
      dispatch(courseMiddleware.getOneCourse(id));
    }
  }, [dispatch, id, currentCourse]);

  const [courseTypes, setCourseTypes] = useState([]);

  useEffect(() => {
    services.courseType.getCourseTypes(0, 0).then((res) => {
      setCourseTypes(res.data);
    });
  }, []);

  const inputs = [
    {
      title: "Title",
      type: "text",
      name: "title",
      placeholder: "Enter Course Title",
      value: formData.title,
      required: true,
    },
    {
      title: "Description",
      type: "textarea",
      name: "description",
      placeholder: "Enter Course Description",
      value: formData.description,
      required: true,
    },
    {
      title: "Course Type",
      type: "select",
      name: "courseType",
      placeholder: "Enter Course Type",
      value: formData.courseType,
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
      value: formData.level,
      required: true,
    },
    {
      title: "Duration",
      type: "number",
      name: "duration",
      placeholder: "Enter Course Duration",
      value: formData.duration,
      required: true,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    for (const { name: inputName } of inputs) {
      if (name === inputName) {
        setFormData((oldData) => ({
          ...oldData,
          [name]: value,
        }));
        break;
      }
    }
  };

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
        navigate(COURSE_LIST_PATH);
      }
    );
  };

  return { navigate, inputs, handleChange, handleSubmit };
}
