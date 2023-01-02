import courseData from "../shared/staticData/courses.json";

export default function courseService() {
  const courses = [...courseData.data];
  let courseId = 0;
  let courseInfoId = 0;

  const addCourse = async (dto) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newCourse = {
          courseId: (++courseId).toString(),
          title: dto.title,
          description: dto.description,
          link: "",
          courseInfo: {
            courseInfoId: (++courseInfoId).toString(),
            duration: dto.duration,
            level: dto.level,
          },
          courseType: {
            courseTypeId: dto.courseType.courseTypeId,
            typeName: dto.courseType.typeName,
          },
        };

        courses.push(newCourse);
        resolve(newCourse);
      }, 1000);
    });
  };

  const getOneCourse = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(courses.find((c) => c.courseId === id));
      }, 500);
    });
  };

  const getCourses = async (page, size) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data;
        let totalPages;
        if (size > 0) {
          const offset = page * size;
          data = courses.slice(offset, offset + size);
          totalPages = Math.ceil(courses.length / size);
        } else {
          data = [...courses];
          totalPages = 1;
        }

        resolve({
          page,
          size,
          data,
          count: data.length,
          totalPages,
          totalCount: courses.length,
        });
      }, 500);
    });
  };

  const updateCourse = async (id, updatedCourse) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedIndex = courses.findIndex((c) => c.courseId === id);
        courses[updatedIndex] = { ...updatedCourse };

        resolve(courses[updatedIndex]);
      }, 500);
    });
  };

  const removeCourse = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedIndex = courses.findIndex((c) => c.courseId === id);
        resolve(courses.splice(deletedIndex, 1)[0]);
      }, 1000);
    });
  };

  return { addCourse, getOneCourse, getCourses, updateCourse, removeCourse };
}
