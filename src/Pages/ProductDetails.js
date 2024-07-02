import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const paramsId = +id;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => alert(error));
    // console.log(data)
  }, []);
  const product = data.find((obj) => obj.id === paramsId);
  console.log(product);
  return (
    <Container>
      {product && (
        <Row className="mt-5 d-flex  justify-content-center">
          <Col className=" d-flex  justify-content-center">
            <img src={product.image} alt={product.title} className="w-50" />
          </Col>
          <Col className="flex-column align-items-center p-4 ">
            <h3 className="display-4">{product.title}</h3>
            <h3>${product.price}</h3>
          </Col>
        </Row>
      )}
    </Container>
    // <Container>
    //   <Row className="mt-5 d-flex justify-content-center">
    //     <Col className="d-flex justify-content-center flex-column align-items-center">
    //       <img src={Data[0].imageUrl} alt={Data[0].title} />
    //       <h3 className="display-4 gap-5">{Data[0].title}</h3>
    //       <h3>${Data[0].price}</h3>
    //     </Col>
    //   </Row>
    // </Container>
  );
};
export default ProductDetails;
