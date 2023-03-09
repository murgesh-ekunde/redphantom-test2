import { Container } from "@mui/system";
import React from "react";
import "./newsblogs.css";
import { Button, Card, Col, Row } from "antd";
import Image1 from "../../assets/img1.png";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3.png";
import { ArrowRightOutlined, DoubleRightOutlined } from "@ant-design/icons";

function Newsblogs() {
  return (
    <div className="news__bg">
      <Container>
        <h1> THE NEWS FROM OUR BLOG </h1>
        <div className="data__card">
          <Row gutter={16}>
            <Col span={8}>
              <Card  style={{borderRadius:" 0 0 0 2rem", width: 350}} cover={<img alt="example" src={Image1} />}>
                <b>IT OPEN NEW DOORS FOR EMPLOYEMENT CREATION</b>
                <p>
                  Unemployment creates a slew of issues. It leads to a lot of
                  young people going in the wrong direction to combat this
                  Problem of unemployment, RedPhantom has generated new job
                  possibilities.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{width: 350}} cover={<img alt="example" src={Image2} />}>
                <b>NANOTECHNOLOGY IS THE FUTURE</b>
                <p>
                  The future of Nanotechnology, there are both bright and gloomy
                  areas. On the one hand, technical advancements, great
                  government backing, increased private investment, and rising
                  demand for smaller devices, to mention a few factors.
                </p>
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{borderRadius:" 0 0 2rem 0",  width: 350}}  cover={<img alt="example" src={Image3} />}>
                <b>
                  INDIA HAS DIRE NEED OF EXPERT CYBERSECURITY PROFESSIONALS.
                </b>
                <p>
                  With several recent incidents of data breach, India's
                  cybersecurity journey so far proves this demand but is the
                  country ready to meet this demand and is it preparing a
                  cybersecurity workforce.
                </p>
              </Card>
            </Col>
          </Row>

          <div className="subscribe">
            <Button>Enter Your Email to Subscribe <ArrowRightOutlined style={{width:"2rem"}} /></Button> 
            <Button>Read More <DoubleRightOutlined style={{width:"2rem"}}/></Button> 
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Newsblogs;
