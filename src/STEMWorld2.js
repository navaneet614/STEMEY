import React from "react";
import "./home.css";
import { Component } from "react";
import logo from "./stemworld2logo.png"
import schedule from "./stemworld2schedule.jpg"
import sponsor1 from "./stemworld2sponsor1.png"
import sponsor2 from "./stemworld2sponsor2.png"
import { Container, Row, Col } from 'react-grid-system';


export default class STEMWorld2 extends Component {

  componentDidMount() {

  }

  closeModal() {

  }

  render() {
    return (
      <div style={{ marginTop: "70px" }}>
        <div style={{ background: "url(" + { logo } + ")", backgroundImage: "cover" }}>
          <div class="head-txt" style={{ width: "90%", marginLeft: "5%" }}>

            <h1 style={{ textAlign: "center" }} class="biggest-header-4">STEM World II</h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img className="stemey-logo" src={logo} />
            </div>
            <h2 style={{ textAlign: "center", fontSize: "23px", marginBottom: "30px" }}> A free virtual stem convention </h2>
            <h2 style={{ textAlign: "center", fontSize: "19px", marginBottom: "25px" }}> When: March 20-28th on Zoom & Discord</h2>
            <h2 style={{ textAlign: "center", fontSize: "19px", marginBottom: "25px" }}> Who: Everyone is eligible to participate; however, only grades 12 or lower can compete. </h2>


            <div class="container" style={{ paddingTop: "0" }}>
              <Container>
                <Row>
                  <Col sm={6}>
                    <div>
                      <h2 style={{ textAlign: "left", lineHeight: "2" }}> Speaker Workshops </h2>
                      <p>Attend workshops led by industry professionals and top-ranking university professors from around the world, including researchers at Duke, Dartmouth, MIT, & more! </p>
                      <p>Topics Include: Financial Literacy, STEM Education in Reducing Global Poverty, Artificial Intelligence, COVID-19 is Changing STEM, COVID-19 Vaccines, and Biological Engineering</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div style={{ textAlign: "left", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                      <h2 style={{ textAlign: "left", lineHeight: "2" }}> Competitions </h2>
                      <p>Individual or a team of 3-4 people</p>
                      <p>Subjects: Math, Biology, Physics, Chemistry</p>

                    </div>
                  </Col>
                  <Col sm={6}>
                    <div>
                      <h2 style={{ textAlign: "left", lineHeight: "2" }}> Global Networking </h2>
                      <p>Participants will be sorted into 4 houses: Matcha, Oolong, Jasmine, Chai</p>
                      <p>Each house will have exclusive bonding events: Game Nights, Speed Friending, Boba/Food Chats, Talent Shows</p>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div style={{ textAlign: "center", lineHeight: "2", width: "90%", marginLeft: "5%" }}>
                      <h2 style={{ textAlign: "left", lineHeight: "2" }}> Sponsored By </h2>
                      <img style={{ width: "40%", padding: "20px" }} src={sponsor1} />
                      <img style={{ width: "40%", padding: "20px" }} src={sponsor2} />
                    </div>
                  </Col>
                </Row>

              </Container>
            </div>

            <h1 class="biggest-header-2" style={{ marginTop: "50px" }}>Schedule</h1>
            <div class="stem-world" style={{ height: "auto" }}>
              <img style={{ width: "50%" }} src={schedule} />
            </div>

            <h1 class="biggest-header-2" style={{ marginTop: "50px" }}>FAQ</h1>
            <div class="container" style={{ paddingTop: "0px" }}>
              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}> Can I attend STEM World without participating in the competitions? </h2>
              <p style={{ marginLeft: "20" }}>Yes! You can attend STEM World without joining a team. The workshops are independent of the competitions so you will have equal access to the speaker’s material as anyone else.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}> I do not have a team for the competition, can I still compete?</h2>
              <p style={{ marginLeft: "20" }}>Yes! Anyone and everyone can compete. If you do not have a team, we will automatically sort you into one of our four sTEAMs (Jasmine, Matcha, Chai, and Oolong) when you join the STEMEY discord <a style={{ color: "#007bff" }} href="https://tinyurl.com/stemeydiscord">here</a>. Keep in mind the deadline to join a team will be the date the event starts: March 20th. </p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>What can I win?</h2>
              <p style={{ marginLeft: "20" }}>Competition prizes include Amazon gift cards, technology such as keyboards and mice, water flasks, and many more!</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}> Do I need to stay the entire time?</h2>
              <p style={{ marginLeft: "20" }}>Absolutely not. We recognize that you have other commitments so we have made the entire event open. This means that if you are interested in only a particular speaker or topic, you may choose to join at that specific time and leave according to your own schedule. There will be no workshops that overlap each other.</p>
              <p style={{ marginLeft: "20" }}>Moreover, if you miss a workshop or talk, all of the presentations will be uploaded on both Education for All Foundation and STEM Enrichment Youth’s Youtube. The benefits of attending live would be the relationships and questions you may propose to the speaker.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>What can I gain from attending this event?</h2>
              <p style={{ marginLeft: "20" }}>By attending this event and participating in the competitions, you have a chance to establish professional connections and work in a team with like-minded individuals. Moreover, our speaker events, which feature professors from distinguished programs, will give you insight into how our perspective on STEM and education is changing.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>How will the speaker events be conducted?</h2>
              <p style={{ marginLeft: "20" }}>Speaker events and workshops will only be held on the weekends (March 20th-21st and 27-28th). Each speaker will present their subtopic/ focus around the general theme and there will be time after each workshop to ask questions. Each speaker block, including the Q&A session, is estimated to be around 1 hour long.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>Will I be able to ask questions during the event or during the speaker events?</h2>
              <p style={{ marginLeft: "20" }}>Yes, the chat function will be open for conversation and we will have moderators to present your question to the speaker. Because of time constraints, we will not be able to get to all of the questions in the chat. Please direct all your questions to the host of the meeting.</p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>How will the social networking events be conducted?</h2>
              <p style={{ marginLeft: "20" }}>All social events will be conducted over Zoom and Discord for 30 min - 1 hour time periods, hosting Breakout Rooms of 4-5 individuals at a time.</p>
              <p style={{ marginLeft: "20" }}>Networking events will focus on cultivating meaningful, casual conversation through a variety of activities, including video game nights and team dinners. Certain social events will be exclusive to different sTEAMs, but we will also have events open to the global public. </p>

              <h2 style={{ fontSize: "25px", textAlign: "left", lineHeight: "2" }}>How will I ensure I get arranged with my preferred partner(s)?</h2>
              <p style={{ marginLeft: "20" }}>Your preferred partner(s) will be in a blocking group. Meaning, you will all stay together but will be further arranged with other groups. </p>


            </div>

          </div>
        </div>
      </div>
    )
  }
}
