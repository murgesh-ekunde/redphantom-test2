import { Container } from "@mui/system";
import React from "react";
import { Col, Divider, Row } from "antd";
import "./strategy.css";
import image4 from "../../assets/sec3.png";

const style={
    background:"none"
}

function Strategy() {
  return (
    <Container className="bg__e">
      <div className="bg__image">
        <img src={image4} />
        <div className="strategy__text">
          <h1>STRATEGIC ENGINEERING</h1>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col style={style} className="gutter-row" span={6}>
              <div>
                <b>Web prodcut Services</b>
                <p>
                  Our extensive application development services offers the
                  services that aid in product creation.
                </p>
              </div>
            </Col>
            <Col style={style} className="gutter-row" span={6}>
              <div>
                <b>Quality Augmentation</b>
                <p>
                  We optimize your existing IT applications, as well as
                  re-architect and re- platform them to make them easier and
                  more innovative.
                </p>
              </div>
            </Col>
            <Col style={style} className="gutter-row" span={6}>
              <div>
                <b>Demonstration And Support of Prototypes</b>
                <p>
                  We offer profound judgment and assist you in maximizing the
                  value of your application through support and retain options.
                </p>
              </div>
            </Col>
            <Col style={style} className="gutter-row"  span={6}>
              <div>
                <b>Testing Services</b>
                <p>
                  Each stage of the app development process includes functional,
                  regression, automated and security testing that is built into
                  the process
                </p>
              </div>
            </Col>
          </Row>

          <div  className="text__right">
            <h1>PRODUCTIVE TALENT MANAGEMENT</h1>
            <p>We are utilizing the global talent revolution, we are opening new digital portals to exploring new possibilities and ideas. We retaining our place in the competitive age of the future and moving on from there for the future to create sustainable digital development for the community.</p>
          <div className="text__box">
                <h3>Empowered To Learn</h3>
                <h3>Performance Management</h3>
            </div>
            <div className="text__box">
                <h3>Value Based Hiring</h3>
                <h3>Succession Planning</h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Strategy;
