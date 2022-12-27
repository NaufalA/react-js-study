
import courseTypeData from "../shared/staticData/courseTypes.json";

export default function courseTypeService() {
  const courseTypes = [...courseTypeData.data];

  const getCourseTypes = async (page, size) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data;
        let totalPage;
        if (size > 0) {
          const offset = page * size;
          data = courseTypes.slice(offset, offset + size);
          totalPage= Math.ceil(courseTypes.length / size);
        } else {
          data = [...courseTypes];
          totalPage = 1;
        }

        const pagedData = {
          page,
          size,
          data,
          count: data.length,
          totalPage,
          totalCount: courseTypes.length,
        };

        console.log(pagedData);

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

  return { getCourseTypes, removeCourseType };
}
