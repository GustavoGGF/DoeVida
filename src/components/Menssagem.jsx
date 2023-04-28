import React from "react";
import { Div, H2 } from "../assets/styles/MenssagemCSS";
import { useEffect } from "react";

export default function Menssagem({ TextTitle, TextMessage }) {
  return (
    <Div className="text-center">
      <H2 className="font1">{TextTitle}</H2>

      <h5 className="font1 mb-4">{TextMessage}</h5>
    </Div>
  );
}
