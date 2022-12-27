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
            courseTypeId: dto.courseType.id,
            typeName: dto.courseType.name,
          },
        };

        courses.push(newCourse);
        resolve(newCourse);
      }, 1000);
    });
  };

  const getCourses = async (page, size) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data;
        let totalPage;
        if (size > 0) {
          const offset = page * size;
          data = courses.slice(offset, offset + size);
          totalPage= Math.ceil(courses.length / size);
        } else {
          data = [...courses];
          totalPage = 1;
        }

        resolve({
          page,
          size,
          data,
          count: data.length,
          totalPage,
          totalCount: courses.length,
        });
      }, 500);
    });
  };

  const removeCourse = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedIndex = courses.findIndex((c) => c.courseId === id);
        console.log(deletedIndex);
        resolve(courses.splice(deletedIndex, 1)[0]);
      }, 1000);
    });
  };

  return { addCourse, getCourses, removeCourse };
}
