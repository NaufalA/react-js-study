import { ErrorResponse } from "../shared/dtos";

export default function courseService(http) {
  const baseURI = "courses";

  const addCourse = async (dto) => {
    try {
      const data = new FormData();
      for (const [ k, v ] of Object.entries(dto)) {
        data.append(k, v);
      }
      console.log(data);

      const res = await http.post(baseURI, data, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      });
      return res.data.data;
    } catch (error) {
      throw new ErrorResponse(
        error.response.data.code || error.response.status,
        error.response.data.message || error.message,
        error.response.data.reason || error.message
      );
    }
  };

  const getOneCourse = async (id) => {
    try {
      const res = await http.get(`${baseURI}/${id}`);
      return res.data.data;
    } catch (error) {
      throw new ErrorResponse(
        error.response.data.code || error.response.status,
        error.response.data.message || error.message,
        error.response.data.reason || error.message
      );
    }
  };

  const getCourses = async (page, size) => {
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
      throw new ErrorResponse(
        error.response.data.code || error.response.status,
        error.response.data.message || error.message,
        error.response.data.reason || error.message
      );
    }
  };

  const updateCourse = async (id, updatedCourse) => {
    try {
      const res = await http.put(`${baseURI}/${id}`, updatedCourse);
      return res.data.data;
    } catch (error) {
      throw new ErrorResponse(
        error.response.data.code || error.response.status,
        error.response.data.message || error.message,
        error.response.data.reason || error.message
      );
    }
  };

  const removeCourse = async (id) => {
    try {
      const res = await http.delete(`${baseURI}/${id}`);
      return res.data.data;
    } catch (error) {
      throw new ErrorResponse(
        error.response.data.code || error.response.status,
        error.response.data.message || error.message,
        error.response.data.reason || error.message
      );
    }
  };

  return { addCourse, getOneCourse, getCourses, updateCourse, removeCourse };
}
