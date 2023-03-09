import { Container } from "@mui/system";
import { Col, Row } from "antd";
import React from "react";
import "./darkbg.css";

function Darkbg() {
  return (
    <div className="darkBg__main">
      <Container>
        <div className="text__top">
          <h1>ENHANCING EVERYONE TO BE SUCCESSFUL !</h1>
          <p>
            AT REDPHANTOM TECH NOVELTY, WE BELIEVE THAT ENABLING EVERYONE TO
            EMERGE IS TO BECOME A BETTER VERSION OF THEMSELVES EVERY DAY.
          </p>
        </div>

        <div className="content__box">
            <div className="content">
            <b>Empowered To Learn</b>
              <p>
                We take great pleasure in referring to ourselves as a business
                that is always asking questions and continually learning new
                things. With great learning and development relationships, there
                will never be a day when your skills and knowledge do not
                continue to improve.
              </p>
                </div>

                <div className="content">
                <b>Empowered To Learn</b>
              <p>
                We take great pleasure in referring to ourselves as a business
                that is always asking questions and continually learning new
                things. With great learning and development relationships, there
                will never be a day when your skills and knowledge do not
                continue to improve.
              </p>
                </div>
            </div>

            <div className="content__box">
                <div className="content">
                <b>Empowered To Grow</b>
              <p>
              Entrepreneurial, creative, and open to change.companies require individuals with these characteristics,creative,and open to change.Providing you with enough chances to think, attempt, and fail until you achieve is one approach to satisfy your need for knowledge.
              </p>
                </div>

                <div className="content">
                <b>Empowered To Lead</b>
              <p>
              Starting on your first day at RPTN, you may prepare yourself to take on a variety of positions in sales, delivery. strategy, and other areas. You can even prepare yourself to take on the job of team leader, country leader, or whole function leader.
              </p>
             </div>
        </div>
      </Container>
    </div>
  );
}

export default Darkbg;
