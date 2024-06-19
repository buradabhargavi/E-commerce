import React, { useContext } from "react";
import { Card, Button, Image } from "react-bootstrap";
import CartContext from "../Store/CartContext";

const Content = (props) => {
  const ctx = useContext(CartContext);
  // console.log(ctx.AddItem);
  return (
    <div className="col-sm-1 col-lg-4 m-4">
      <Card className="border-0">
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Image src={props.imageUrl} rounded />
        {/* // <Card.Img variant="top" src={props.url} alt={props.title} /> */}
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="card-text">${props.price}</span>
            <Button className="fw-bold ms-5" onClick={() => ctx.AddItem(props)}>
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Content;
