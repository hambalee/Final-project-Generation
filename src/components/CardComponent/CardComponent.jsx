import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BiRun } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import "./CardComponent.css";

function CardComponent({
  id,
  name,
  date,
  duration,
  type,
  description,
  status,
}) {
  return (
    <div className="m-4">
      <Card key={id} style={{ width: "36rem", height: "100%" }}>
        <Card.Header>
          <div className="d-flex justify-content-center">
            <div className="m-2">
              <BiRun className="card-font-size-header" />
            </div>
            <div className="m-2">
              <Card.Title>
                <div className="card-font-size-header">{name}</div>{" "}
              </Card.Title>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="p-3" style={{ zIndex: 1 }}>
          <Card.Text>
            <div className="d-flex justify-content-between">
              <div className="card-font-size-body">
                <b>Date: </b>
                <span>{date}</span>
              </div>

              <div className="card-font-size-body">
                <b>Duration: </b>
                <span>{duration}</span>
              </div>
            </div>
            <div className="card-font-size-body">
              <b>Type: </b>
              <span>{type}</span>
            </div>
            <div className="card-font-size-body">
              <b>Description: </b>
              {description}
            </div>
          </Card.Text>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <Form.Check
                type="switch"
                id="custom-switch"
                label={status}
                className="card-font-size-body"
              />
            </div>
            <div className="d-flex justify-content-end card-font-size-body">
              <Button variant="primary m-1">Edit</Button>
              <Button variant="danger m-1">Delete</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
