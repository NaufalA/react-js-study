import { AddCourseType, CourseTypeList, CourseTypeRoot, EditCourseType } from "..";
import { ADD_COURSE_TYPE_PATH, COURSE_TYPE_LIST_PATH, COURSE_TYPE_PATH, EDIT_COURSE_TYPE_PATH } from "../../shared/constants/paths";

const courseTypePages = {
  path: COURSE_TYPE_PATH,
  element: <CourseTypeRoot />,
  children: [
    {
      path: COURSE_TYPE_LIST_PATH,
      element: <CourseTypeList />,
    },
    {
      path: ADD_COURSE_TYPE_PATH,
      element: <AddCourseType />,
    },
    {
      path: `${EDIT_COURSE_TYPE_PATH}/:id`,
      element: <EditCourseType />,
    },
  ],
};

export default courseTypePages;