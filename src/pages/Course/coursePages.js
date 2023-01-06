import { AddCourse, CourseList, CourseMaterialList, CourseRoot, EditCourse } from "..";
import { ADD_COURSE_PATH, COURSE_LIST_PATH, COURSE_MATERIAL_LIST_PATH, COURSE_PATH, EDIT_COURSE_PATH } from "../../shared/constants/paths";

const coursePages = {
  path: COURSE_PATH,
  element: <CourseRoot />,
  children: [
    {
      path: COURSE_LIST_PATH,
      element: <CourseList />,
    },
    {
      path: ADD_COURSE_PATH,
      element: <AddCourse />,
    },
    {
      path: `${EDIT_COURSE_PATH}/:id`,
      element: <EditCourse />,
    },
    {
      path: `${COURSE_MATERIAL_LIST_PATH}/:id`,
      element: <CourseMaterialList />,
    },
  ],
};

export default coursePages;
