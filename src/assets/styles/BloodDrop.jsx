import styled, { keyframes } from "styled-components";

export const Div = styled.div`
  width: 100vw;
  user-select: none;
`;

export const Div1 = styled.div`
  margin-top: 5px;
  width: 300px;
  margin-left: 10px;
`;
export const Div2 = styled.div`
  width: 300px;
`;

const drop = keyframes`
  0% {
    transform: translate(0, -100%);
  }
  50% {
    transform: translate(0, 100%);
  }
  100% {
    transform: translate(0, 100%);
  }
`;
const upBlood1 = keyframes`
  0% {
    top: 50px;
    height: 10px;
    transform: translateX(50px);
  }
  12.5% {
    top: 40px;
    height: 20px;

  }
  25% {
    top: 30px;
    height: 30px;
  }
  37.5% {
    top: 20px;
    height: 40px;
  }
  50%{
    top: 10px;
    height: 50px;
  }
  62.5%{
    top: 20px;
    height: 40px;
  }
  73%{
    top: 30px;
    height: 30px;
  }
  85.5% {
    top: 40px;
    height: 20px;
  }
  100%{
    top: 50px;
    height: 10px;
  }
`;

const upBlood5 = keyframes`
  0% {
    top: 50px;
    height: 10px;
  }
  12.5% {
    top: 40px;
    height: 20px;

  }
  25% {
    top: 30px;
    height: 30px;
  }
  37.5% {
    top: 20px;
    height: 40px;
  }
  50%{
    top: 10px;
    height: 50px;
  }
  62.5%{
    top: 20px;
    height: 40px;
  }
  73%{
    top: 30px;
    height: 30px;
  }
  85.5% {
    top: 40px;
    height: 20px;
  }
  100%{
    top: 50px;
    height: 10px;
  }
`;
const upBlood6 = keyframes`
  0% {
    top: 50px;
    height: 10px;
    transform: translateX(-40px);
  }
  12.5% {
    top: 40px;
    height: 20px;

  }
  25% {
    top: 30px;
    height: 30px;
  }
  37.5% {
    top: 20px;
    height: 40px;
  }
  50%{
    top: 10px;
    height: 50px;
  }
  62.5%{
    top: 20px;
    height: 40px;
  }
  73%{
    top: 30px;
    height: 30px;
  }
  85.5% {
    top: 40px;
    height: 20px;
  }
  100%{
    top: 50px;
    height: 10px;
  }
`;

export const DownBlood = keyframes`
    0% {
    top: 50px;
    height: 50px;
  }
  25% {
    top: 40px;
    height: 40px;
  }
  50% {
    top: 30px;
    height: 30px;
  }
  75% {
    top: 20px;
    height: 20px;
  }
  100% {
    top: 10px;
    height: 10px;
  }
`;

export const DropDiv = styled.div`
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid #ff4242;
  border-radius: 80px;
  transform: rotate(45deg);
  position: absolute;
  top: 20px;
  left: 20px;
  margin-left: 10px;
  animation: ${drop} 0.7s linear forwards;
  animation-fill-mode: forwards;
  transform-origin: bottom center;
`;

export const PuddleDiv1 = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood1} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;
export const PuddleDiv2 = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood1} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;
export const PuddleDiv3 = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood1} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;
export const PuddleDiv4 = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood1} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;
export const PuddleDiv5 = styled.div`
  position: absolute;
  top: 10px;
  left: 40px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
`;
export const PuddleDiv6 = styled.div`
  position: absolute;
  top: 10px;
  left: 50px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood6} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;
export const PuddleDiv7 = styled.div`
  position: absolute;
  top: 10px;
  left: 60px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood6} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;
export const PuddleDiv8 = styled.div`
  position: absolute;
  top: 10px;
  left: 70px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood6} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;
export const PuddleDiv9 = styled.div`
  position: absolute;
  top: 10px;
  left: 80px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;

export const PuddleDiv10 = styled.div`
  position: absolute;
  top: 10px;
  left: 70px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
`;
export const PuddleDiv11 = styled.div`
  position: absolute;
  top: 10px;
  left: 60px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
`;
export const PuddleDiv12 = styled.div`
  position: absolute;
  top: 10px;
  left: 50px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
`;
export const PuddleDiv13 = styled.div`
  position: absolute;
  top: 10px;
  left: 0px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
`;
export const PuddleDiv14 = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
`;
export const PuddleDiv15 = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 1;
`;
export const PuddleDiv16 = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 11px;
  background-color: #ff4242;
  animation: ${upBlood5} ease-in-out 8s forwards;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  z-index: 2;
`;

export const IMG1 = styled.img`
  margin-left: 20px;
  margin-top: 10px;
  height: 32px !important;
`;

const animate = keyframes`
  0%,
  5% {
    transform: scaleY(0) translateX(0);
  }
  10% {
    transform: scaleY(1) translateX(0);
  }
  90% {
    transform: scaleY(1) translateX(calc(170px - 10px));
  }
  95%,
  100% {
    transform: scaleY(0) translateX(calc(170px - 10px));
  }
`;

export const Lighbar = styled.div`
  background: #ff8484;
  width: 5px;
  height: 40px;
  border-radius: 10px;
  z-index: 2;
  box-shadow: 0 0 10px #ff8484, 0 0 20px #ff8484, 0 0 40px #ff8484,
    0 0 80px #ff8484, 0 0 120px #ff8484;
  animation: ${animate} 5s linear paused;
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-shadow: 0 0 10px #ff8484, 0 0 20px #ff8484, 0 0 40px #ff8484,
    0 0 80px #ff8484, 0 0 120px #ff8484;
  z-index: 1;
`;

const animate2 = keyframes`
  0%,
  5% {
    transform: translateX(0);
  }
  10% {
    transform:  translateX(0);
  }
  90% {
    transform:  translateX(calc(180px - 10px));
  }
  95%,
  100% {
    transform:  translateX(calc(180px - 10px));
  }
`;

export const Toplayer = styled.div`
  height: 70px;
  width: 100%;
  background: #d6fff6;
  animation: ${animate2} 5s linear paused;
  z-index: 2;
  position: absolute;
`;
