import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { PaginationControl, StyledContainer } from "../../components";
import CourseItem from "./components/CourseItem";
import services from "../../services";

const Empty = () => <h1>No Item</h1>;

const List = (props) => {
  const { data } = props;

  return (
    <ListGroup>
      {data.map((d, i) => (
        <CourseItem key={`course-item-${i}`} data={d} />
      ))}
    </ListGroup>
  );
};

const CourseList = (props) => {
  const { onNavigate } = props;

  const [isLoading, setLoading] = useState(false);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  const [courses, setCourses] = useState([]);
  const [count, setCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setLoading(true);
    services.course.getCourses(page, size).then((pagedCourses) => {
      setCourses(pagedCourses.data);
      setCount(pagedCourses.count);
      setTotalPages(pagedCourses.totalPage);
      setTotalCount(pagedCourses.totalCount);
      setLoading(false);
    });
  }, [page, size]);

  return (
    <StyledContainer className="d-flex flex-column align-items-stretch gap-4">
      <h1>Course List</h1>
      <Button
        variant="success"
        onClick={() => onNavigate("add-course")}
        disabled={isLoading}
        className="align-self-start"
      >
        Add Course
      </Button>
      {courses.length === 0 ? (
        <Empty />
      ) : (
        <>
          <List data={courses} />
          <PaginationControl
            page={page}
            size={size}
            count={count}
            totalPages={totalPages}
            totalCount={totalCount}
            onChangePage={setPage}
            onChangeSize={setSize}
            disabled={isLoading}
          />
        </>
      )}
    </StyledContainer>
  );
};

export default CourseList;
