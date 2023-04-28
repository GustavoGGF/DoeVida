import React, { useEffect, useState } from "react";
import {
  Div,
  Div1,
  Div2,
  DropDiv,
  PuddleDiv1,
  PuddleDiv2,
  PuddleDiv3,
  PuddleDiv4,
  PuddleDiv5,
  PuddleDiv6,
  PuddleDiv7,
  PuddleDiv8,
  PuddleDiv9,
  PuddleDiv10,
  PuddleDiv11,
  PuddleDiv12,
  PuddleDiv13,
  PuddleDiv14,
  PuddleDiv15,
  PuddleDiv16,
  IMG1,
  Lighbar,
  H2,
  Toplayer,
} from "../assets/styles/BloodDrop";
import heart1 from "../assets/images/heart.png";
import heart2 from "../assets/images/heart1.png";

export default function BloodDrop() {
  const [showPuddle, setShowPuddle] = useState(false);

  useEffect(() => {
    const bloodDrop = document.getElementById("blood-drop");
    const logo1 = document.getElementById("logo1");
    const logo2 = document.getElementById("logo2");

    logo2.style.display = "none";

    bloodDrop.addEventListener("animationend", () => {
      bloodDrop.style.animationIterationCount = "infinite";
      setShowPuddle(true);
      setTimeout(() => {
        logo1.style.display = "none";
        logo2.style.display = "block";
        bloodDrop.style.display = "none";
        const puddles = document.querySelectorAll(".puddle");
        const LogoText = document.querySelectorAll(".bar");
        const lightbar = document.getElementById("ligh");
        const toplayer = document.getElementById("top");

        puddles.forEach((div) => {
          div.addEventListener("animationend", () => {
            div.style.display = "none";
            LogoText.forEach((logo) => {
              logo.classList.remove("hidden");
              logo.style.animationPlayState = "running";
              setTimeout(() => {
                toplayer.classList.add("hidden");
                lightbar.classList.add("hidden");
              }, 5000);
            });
          });
        });
      }, 4000);
    });
  }, []);

  return (
    <Div>
      <DropDiv id="blood-drop" />
      <Div2 className="d-flex flex-row">
        <IMG1 src={heart1} id="logo1" />
        <IMG1 src={heart2} id="logo2" />
        <Div1 className="d-flex flex-row" id="logo">
          <Lighbar className="bar hidden" id="ligh" />
          <Toplayer className="bar hidden" id="top" />
          <H2 className="bar hidden font1">DoeVida</H2>
        </Div1>
      </Div2>
      {showPuddle && <PuddleDiv1 className="puddle" />}
      {showPuddle && <PuddleDiv2 className="puddle" />}
      {showPuddle && <PuddleDiv3 className="puddle" />}
      {showPuddle && <PuddleDiv4 className="puddle" />}
      {showPuddle && <PuddleDiv5 className="puddle" />}
      {showPuddle && <PuddleDiv6 className="puddle" />}
      {showPuddle && <PuddleDiv7 className="puddle" />}
      {showPuddle && <PuddleDiv8 className="puddle" />}
      {showPuddle && <PuddleDiv9 className="puddle" />}
      {showPuddle && <PuddleDiv10 className="puddle" />}
      {showPuddle && <PuddleDiv11 className="puddle" />}
      {showPuddle && <PuddleDiv12 className="puddle" />}
      {showPuddle && <PuddleDiv13 className="puddle" />}
      {showPuddle && <PuddleDiv14 className="puddle" />}
      {showPuddle && <PuddleDiv15 className="puddle" />}
      {showPuddle && <PuddleDiv16 className="puddle" />}
    </Div>
  );
}
