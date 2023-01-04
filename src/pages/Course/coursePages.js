import { AddCourse, CourseList, CourseRoot, EditCourse } from "..";
import { ADD_COURSE_PATH, COURSE_LIST_PATH, COURSE_PATH, EDIT_COURSE_PATH } from "../../shared/constants/paths";

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
  ],
};

export default coursePages;
