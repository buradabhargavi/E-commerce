import React from "react";
import Content from "./Content";
import { Button } from "react-bootstrap";
const productsArr = [
  {
    id: 1,
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,

    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
function Display() {
  return (
    <React.Fragment>
      <h2 className="text-center my-4">Music </h2>
      <div className="container my-4">
        <div className="row justify-content-center align-items-center ">
          {productsArr.map((item) => {
            return (
              <Content
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </div>
        <Button variant="secondary" className="fw-bold text-info">
          SEE THE CART
        </Button>
      </div>
    </React.Fragment>
  );
}
export default Display;
