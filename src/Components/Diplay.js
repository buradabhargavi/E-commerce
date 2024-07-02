import React, { useState, useEffect } from "react";
import Content from "./Content";
import { Button } from "react-bootstrap";

function Display() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetch("https://fakestoreapi.com/products?limit=5");
        if (!data.ok) {
          throw new Error("Could not fetch data");
        }
        const response = await data.json();
        setProducts(response);
      } catch (error) {
        console.error(error.message);
      }
    }

    loadData();
  }, []);

  return (
    <React.Fragment>
      <h2 className="text-center my-4">Music</h2>
      <div className="container my-4">
        <div className="row justify-content-center align-items-center ">
          {products.map((item) => {
            console.log(item);
            return (
              <Content
                key={item.id}
                imageUrl={item.image}
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
