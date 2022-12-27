import { useEffect, useState } from "react";
import { Button, ButtonGroup, FormControl } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { StyledContainer } from "../../components";
import CourseItem from "./components/CourseItem";
import services from "../../services";

const Empty = () => <div>No Item</div>;

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

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(2);
  const [courses, setCourses] = useState([]);
  const [count, setCount] = useState(size);
  const [totalPages, setTotalPages] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    services.course.getCourses(page, size).then((pagedCourses) => {
      setCourses(pagedCourses.data);
      setCount(pagedCourses.count);
      setTotalPages(pagedCourses.totalPage);
      setTotalCount(pagedCourses.totalCount);
    });
  }, [page, size]);

  return (
    <StyledContainer className="d-flex flex-column align-items-stretch gap-4">
      <div className="d-flex justify-content-between">
        <Button variant="success" onClick={() => onNavigate("add-course")}>
          Add Course
        </Button>
        <div className="d-flex gap-2 justify-content-end align-items-center">
          <span>{`showing ${count} out of ${totalCount} data`}</span>
          <FormControl
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            disabled={size === 1}
            style={{ width: "20%" }}
          />
          <ButtonGroup>
            <Button
              onClick={() => setPage(page - 1)}
              disabled={page === 0}
              variant="outline-primary"
            >
              PREV
            </Button>
            <div className="btn btn-outline-primary">{page + 1}</div>
            <Button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages - 1}
              variant="outline-primary"
            >
              NEXT
            </Button>
          </ButtonGroup>
        </div>
      </div>
      {courses === 0 ? <Empty /> : <List data={courses} />}
    </StyledContainer>
  );
};

export default CourseList;
