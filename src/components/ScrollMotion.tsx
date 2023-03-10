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
import img0 from "../assets/img0.jpg";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img12.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img2.jpg";
import img13 from "../assets/img13.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import ipigreet from "../assets/ipigreet.jpg";

const reasons: string[] = [
  "You are beautiful",
  "You are smart",
  "You are kind",
  "You are sweet",
  "You are tough",
  "You are a racer",
  "I love to hang out with you",
  "You are very clean",
  "You like to build volcanos", // n
  "You say injolmi and amibo",
  "Ipi and Yam gembrot",
  "You like to eat",
  "You have the best smiles and laughs",
  "You are you...",
];

const ScrollMotion = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  const fontColor: string = "#ffc2d1";

  return (
    <ScrollContainer>
      <ScrollPage>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "8vh",
          }}
        >
          <img
            style={{
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
            src={ipigreet}
            alt="no image"
          />

          <h1
            style={{
              fontSize: "clamp(20px, 4vw, 60px)",
              color: "white",
              marginBottom: "0",
            }}
          >
            Dear Odelia,
          </h1>
          <h1 style={{ fontSize: "clamp(20px, 4vw, 60px)", color: "white" }}>
            Happy Valentine's Day
          </h1>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "clamp(20px, 3vw, 25px)",
                color: "white",
                width: "clamp(270px, 25vw, 400px)",
                textAlign: "justify",
                backgroundColor: "rgba(255, 170, 203, 0.5)",
                padding: "25px",
                borderRadius: "5%",
              }}
            >
              I created this just to tell you 14 reasons of why I so so in love
              with you.
            </p>
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <h1
            style={{
              color: `${fontColor}`,
              fontSize: "clamp(30px, 5vw, 50px)",
            }}
          >
            I love you because
          </h1>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(20px, 3vw, 50px)",
              }}
            >
              {reasons[0]}
            </h1>
            <img
              src={img0}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 280px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[1]}
            </h1>
            <img
              src={img1}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[2]}
            </h1>
            <img
              src={img2}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[3]}
            </h1>
            <img
              src={img3}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[4]}
            </h1>
            <img
              src={img4}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[5]}
            </h1>
            <img
              src={img5}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[6]}
            </h1>
            <img
              src={img6}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[7]}
            </h1>
            <img
              src={img7}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[8]}
            </h1>
            <img
              src={img8}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[9]}
            </h1>
            <img
              src={img9}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[10]}
            </h1>
            <img
              src={Ipiyam}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[11]}
            </h1>
            <img
              src={img11}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[12]}
            </h1>
            <img
              src={img12}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: `${fontColor}`,
                fontSize: "clamp(30px, 3vw, 50px)",
              }}
            >
              {reasons[13]}
            </h1>
            <img
              src={img13}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img15}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img16}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img19}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img17}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img18}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img20}
              alt="no image"
              style={{
                width: "clamp(250px, 25vw, 500px)",
                height: "auto",
                aspectRatio: "auto",
              }}
            />
          </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ScrollMotion;
