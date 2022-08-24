import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { BiRun } from "react-icons/bi";
import Form from "react-bootstrap/Form";
import "./CardComponent.css";
import { useGlobalContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import run from "../../assets/run.png";
import { MdDateRange } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { FaHashtag } from "react-icons/fa";
import moment from "moment";

function CardComponent({
  id,
  title,
  date,
  duration,
  type,
  description,
  status,
}) {
  const {
    deleteActivity,
    statusActivity,
    setStatusActivity,
    setActivityData,
    imgActivities,
    updateStatusActivity,
    typeToImageActivityPath,
  } = useGlobalContext();

  // console.log(status);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const handleClickEdit = () => {
    setActivityData(title, type, date, duration, description);
    navigate(`/form/${id}`);
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    deleteActivity(id);
  };

  const handleclickChangeStatus = () => {
    console.log(id);
    const oldStatus = !statusActivity.get(id);
    console.log(oldStatus);

    statusActivity.set(id, oldStatus);
    // setStatusActivity(new Map(JSON.parse(JSON.stringify([...statusActivity]))));
    setStatusActivity(new Map(statusActivity));
    updateStatusActivity(id);
  };

  return (
    <div className="m-4">
      <Card
        className="card-component"
        key={id}
        style={{ width: "36rem", height: "100%" }}
      >
        <Card.Header>
          <div className="card-component-title d-flex justify-content-center">
            <div className="m-2 mb-4">
              {/* <BiRun className="card-font-size-header" /> */}
              <img
                // src={imgActivities.get(id)}
                src={typeToImageActivityPath(type)}
                className="card-component-imgactivity"
              />
            </div>
            <div className="m-2">
              <Card.Title>
                <div className="card-font-size-header">{title}</div>{" "}
              </Card.Title>
            </div>
          </div>
        </Card.Header>
        <Card.Body
          className="card-component-detail p-3"
          style={{ zIndex: 1, width: "24rem" }}
        >
          <div className="card-component-detail-date">
            <div className=" d-flex justify-content-between">
              <div className="card-font-size-body">
                {/* <b>Date:MdDateRange </b> */}
                <MdDateRange className="mb-1" />
                {/* <span className="m-2">{date?.slice(0, 10)}</span> */}
                <span className="m-2">
                  {moment(date, "YYYY-MM-DD").format("LL")}
                </span>
              </div>
            </div>
            <div className="card-font-size-body">
              {/* <b>Duration: </b> */}
              <BiTime className="mb-1" />
              <span className="m-2">{duration} Minutes</span>
            </div>

            <div className="card-font-size-body">
              {/* <b className="">Type: </b> */}
              <FaHashtag style={{ color: "skyblue" }} className="mb-1" />
              <span className="m-1">{type}</span>
            </div>
            <div className="card-font-size-body">
              <b>Description : </b>
              <span>{description}</span>
            </div>
          </div>

          <div className="d-flex justify-content-between w-100">
            <div className="w-100">
              <div className="d-flex justify-content-between w-100 pt-3">
                {statusActivity.get(id) ? (
                  <>
                    <div className="d-flex justify-content-between w-50">
                      <div></div>
                      <Form.Check
                        type="switch"
                        id={id}
                        label={status}
                        defaultChecked={statusActivity.get(id)}
                        className="card-font-size-body"
                        onClick={handleclickChangeStatus}
                      />
                    </div>
                    <div className="w-50">
                      <p
                        style={{
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        Completed
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex justify-content-between w-50">
                      <div></div>
                      <Form.Check
                        type="switch"
                        // id="custom-switch"
                        id={id}
                        label={status}
                        defaultChecked={statusActivity.get(id)}
                        className="card-font-size-body"
                        onClick={handleclickChangeStatus}
                      />
                    </div>
                    <div className="w-50">
                      <p className="">Pending</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="d-flex justify-content-end card-font-size-body">
              <Button
                variant="outline-primary m-1"
                type="button"
                onClick={handleClickEdit}
              >
                Edit
              </Button>
              <Button
                variant="outline-danger m-1"
                type="button"
                onClick={handleClickDelete}
              >
                Delete
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
