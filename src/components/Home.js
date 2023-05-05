import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("http://localhost:7000/mobiles");
    // console.log(res)
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Row>
          {data.map((curItem) => {
            return (
              <Col lg={4} className="mt-4">
                <div className="card" style={{width: "18rem"}}>
                  <img src={curItem.mobileImg} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title">{curItem.mobileName}</h4>
                    <h5 className="card-title">Price &#8377;{curItem.price}</h5>
                    <p className="card-text"><b>Description:</b><br/> 
                    {curItem.description}
                    </p>

                    <p class="card-text"><b>Ranking:</b><br/>
                    {curItem.rating}
                    </p>
                    <a href="#" class="card-link">Read more</a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
