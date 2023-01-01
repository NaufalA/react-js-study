import courseTypeData from "../shared/staticData/courseTypes.json";

export default function courseTypeService() {
  const courseTypes = [...courseTypeData.data];
  let courseTypeId = 0;

  const addCourseType = async (dto) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newType = {
          courseTypeId: (++courseTypeId).toString(),
          typeName: dto.typeName,
        };

        courseTypes.push(newType);
        resolve(newType);
      }, 1000);
    });
  };

  const getCourseTypes = async (page, size) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data;
        let totalPages;
        if (size > 0) {
          const offset = page * size;
          data = courseTypes.slice(offset, offset + size);
          totalPages = Math.ceil(courseTypes.length / size);
        } else {
          data = [...courseTypes];
          totalPages = 1;
        }

        const pagedData = {
          page,
          size,
          data,
          count: data.length,
          totalPages,
          totalCount: courseTypes.length,
        };

        resolve(pagedData);
      }, 500);
    });
  };

  const removeCourseType = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedIndex = courseTypes.findIndex((c) => c.courseId === id);
        console.log(deletedIndex);
        resolve(courseTypes.splice(deletedIndex, 1)[0]);
      }, 1000);
    });
  };

  return { addCourseType, getCourseTypes, removeCourseType };
}
