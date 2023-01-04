import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import courseTypeMiddleware from "../../redux/middlewares/courseTypeMiddleware";
import { COURSE_TYPE_LIST_PATH } from "../../shared/constants/paths";

export default function useEditCourseType() {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const currentCourseType = useSelector(
    (state) => state.courseType.currentCourseType
  );

  const [formData, setFormData] = useState({
    typeName: "",
  });

  useEffect(() => {
    if (currentCourseType && currentCourseType.id === id) {
      setFormData({
        typeName: currentCourseType.typeName,
      });
    } else {
      dispatch(courseTypeMiddleware.getOneCourseType(id));
    }
  }, [dispatch, id, currentCourseType]);

  const handleChange = (e) => {
    if (e.target.name === "typeName") {
      setFormData((oldData) => ({
        ...oldData,
        typeName: e.target.value,
      }));
    }
  };

  const inputs = [
    {
      title: "Type Name",
      type: "text",
      name: "typeName",
      placeholder: "Enter Course Type Name",
      value: formData.typeName,
      onChange: handleChange,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const { target } = e;

    dispatch(
      courseTypeMiddleware.updateCourseType(currentCourseType.id, {
        ...currentCourseType,
        typeName: target.typeName.value,
      })
    ).then(() => {
      window.alert(`Success Update Course Type`);
      navigate(COURSE_TYPE_LIST_PATH);
    });
  };

  return { navigate, inputs, handleSubmit };
}
