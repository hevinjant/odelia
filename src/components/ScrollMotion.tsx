import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";
import Ipiyam from "../assets/ipiyam.jpg";
import img1 from "../assets/img1.jpeg";
import img11 from "../assets/img11.jpg";

const reasons: string[] = [
  "You are beautiful",
  "You are smart",
  "You are kind",
  "You are sweet",
  "You are tough",
  "You love what I love",
  "You have a good handwriting",
  "You are very clean",
  "You like to build volcanos",
  "You say injolmi and amibo",
  "Ipi and Yam gembrot",
  "You like to eat",
  "You like to cabut my bulu",
  "You are exactly what I want",
];

const ScrollMotion = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "75px" }}>
            I Love You Because
          </h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[0]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[1]}</h1>
          <img
            src={img1}
            alt="no image"
            style={{ width: "500px", height: "auto", aspectRatio: "auto" }}
          />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={MoveOut(1000, 0)}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[2]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[3]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={MoveOut(-1000, 0)}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[4]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[5]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[6]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[7]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[8]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={MoveIn(-1000, 0)}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[9]}</h1>
        </Animator>
        <Animator animation={MoveIn(1000, 0)}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[10]}</h1>
          <img
            src={Ipiyam}
            alt="no image"
            style={{ width: "500px", height: "auto", aspectRatio: "auto" }}
          />
        </Animator>
      </ScrollPage>
      {/* <ScrollPage>
        <Animator animation={MoveIn(1000, 0)}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[10]}</h1>
        </Animator>
      </ScrollPage> */}
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[11]}</h1>
          <img
            src={img11}
            alt="no image"
            style={{ width: "500px", height: "auto", aspectRatio: "auto" }}
          />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[12]}</h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <h1 style={{ color: "white", fontSize: "50px" }}>{reasons[13]}</h1>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ScrollMotion;
