import styled from "styled-components";
import verificar from "../images/verify.png";

export const DivP = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
export const Div1 = styled.div`
  max-width: 100vw;
  overflow: hidden;
  padding-bottom: 20px;
`;

export const Div2 = styled.div`
  width: 300px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.div`
  width: 100vw;
`;

export const Div3 = styled.div`
  text-align: center;
  max-width: 300px;
  margin-top: 10px;
`;

export const Span1 = styled.span`
  font-size: 1.5em;
`;

export const Div4 = styled.div`
  justify-content: center;
  align-items: center;
  max-width: 800px;
  user-select: none;
`;

export const H5 = styled.h5`
  margin-top: 80px;
  text-align: center;
  padding: 50px;
  background: #f93e16;
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

export const Button1 = styled.button`
  background-image: url(${verificar});
  background-position: center;
  background-size: cover;
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const Div5 = styled.div`
  user-select: none;
`;
