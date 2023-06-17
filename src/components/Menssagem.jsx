import React from "react";
import { Div, H2 } from "../assets/styles/MenssagemCSS";

export default function Menssagem({ TextTitle, TextMessage }) {
  return (
    <Div className="text-center">
      <H2 className="font1">{TextTitle}</H2>

      <div id="texts" className="d-flex flex-column">
        {TextMessage.map((text, index) => (
          <h5 key={index} className="font1 mb-2">
            {text}
          </h5>
        ))}
      </div>
    </Div>
  );
}
