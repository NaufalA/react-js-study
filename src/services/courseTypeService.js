export default function courseTypeService(http) {
  const baseURI = "course-types"

  const addCourseType = async (dto) => {
    try {
      const res = await http.post(baseURI, dto);
      console.log(res);
      return res.data.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getOneCourseType = async (id) => {
    try {
      const res = await http.get(`${baseURI}/${id}`);
      return res.data.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const getCourseTypes = async (page, size) => {
    try {
      const res = await http.get(`${baseURI}?page=${page}&size=${size}`);
      const data = res.data.data;
      return {
        page: data.page,
        size: data.size,
        data: data.content,
        count: data.fetchedSize,
        totalPages: data.totalPage,
        totalCount: data.totalSize
      };
    } catch (error) {
      throw new Error(error);
    }
  };

  const updateCourseType = async (id, updatedCourseType) => {
    try {
      const res = await http.put(`${baseURI}/${id}`, updatedCourseType);
      console.log(res);
      return res.data.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const removeCourseType = async (id) => {
    try {
      const res = await http.delete(`${baseURI}/${id}`);
      return res.data.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return {
    addCourseType,
    getOneCourseType,
    getCourseTypes,
    updateCourseType,
    removeCourseType,
  };
}
