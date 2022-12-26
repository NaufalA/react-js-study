import { useState } from "react";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { StyledContainer } from "../../components";
import CourseItem from "./components/CourseItem";
import courseData from "../../shared/staticData/courses.json";

const Empty = () => <div>No Item</div>;

const List = (props) => {
  const { data } = props;

  return (
    <StyledContainer>
      <ListGroup>
        {data.map((d, i) => (
          <CourseItem key={`course-item-${i}`} data={d} />
        ))}
      </ListGroup>
    </StyledContainer>
  );
};

const CourseList = (props) => {
  const { onNavigate } = props;

  const [courses, setCourses] = useState(courseData);

  return (
    <StyledContainer>
      <Button variant="success" onClick={() => onNavigate("add-course")}>
        Add Course
      </Button>
      {courses.data.length === 0 ? <Empty /> : <List data={courses.data} />}
    </StyledContainer>
  );
};

export default CourseList;
