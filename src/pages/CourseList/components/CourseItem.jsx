import { Button } from "react-bootstrap";
import React from "react";
import { ButtonGroup, Col } from "react-bootstrap";
import { ListItem } from "./ListItem";

function CourseItem(props) {
    const { data } = props;

    return (
        <ListItem>
            <Col>
                <h3 className="lead">{data.title}</h3>
                <p>{data.description}</p>
            </Col>
            <ButtonGroup>
                <Button variant="primary">EDIT</Button>
                <Button variant="danger">DELETE</Button>
                <Button variant="secondary">DOWNLOAD</Button>
            </ButtonGroup>
        </ListItem>
    );
}

export default React.memo(CourseItem);