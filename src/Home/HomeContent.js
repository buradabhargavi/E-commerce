import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Movies = [
  {
    date: "2022-05-01",
    director: "Christopher Nolan",
    title: "Inception",
  },
  {
    date: "2019-11-22",
    director: "Martin Scorsese",
    title: "The Irishman",
  },
  {
    date: "2018-07-20",
    director: "James Cameron",
    title: "Avatar",
  },
  {
    date: "2021-06-15",
    director: "Denis Villeneuve",
    title: "Dune",
  },
];

function HomeContent() {
  return (
    <React.Fragment>
      <Container>
        <h1 className="pt-3">Tours</h1>
        <ul className="my-5 mx-5 px-5">
          {Movies.map((item) => (
            <div>
              <li
                key={item.id}
                className="d-flex justify-content-between pt-4 border-bottom"
              >
                <span>{item.date} </span>
                <span>{item.director} </span>
                <span>{item.title}</span>
                <span>
                  <Button className="mb-3">Buy Tickets</Button>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </Container>
    </React.Fragment>
  );
}

export default HomeContent;
