import React from "react";
import styled, { keyframes } from "styled-components";

// Define the keyframes
const dot1Animation = keyframes`
  0% {
    border-color: #1e3f57;
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }
  50% {
    border-color: #1e574f;
    transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
  }
  100% {
    border-color: #1e3f57;
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }
`;

const dot2Animation = keyframes`
  0% {
    border-color: #447891;
    box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.2);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }
  50% {
    border-color: #449180;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.8);
    transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
  }
  100% {
    border-color: #447891;
    box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.2);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }
`;

const dot3Animation = keyframes`
  0% {
    border-color: #6bb2cd;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }
  50% {
    border-color: #6bcdb2;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.8);
    transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
  }
  100% {
    border-color: #6bb2cd;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
  }
`;

// Styled components for the loader and dots
const LoaderContainer = styled.div`
  width: 200px;
  height: 200px;
  perspective: 200px;
`;

const Dot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 100px;
  transform-origin: 50% 50%;
  background-color: transparent;

  &:nth-child(1) {
    width: 120px;
    height: 120px;
    margin-top: -60px;
    margin-left: -60px;
    border: 40px outset #1e3f57;
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    animation: ${dot1Animation} 1000ms cubic-bezier(0.49, 0.06, 0.43, 0.85)
      infinite;
  }

  &:nth-child(2) {
    width: 140px;
    height: 140px;
    margin-top: -70px;
    margin-left: -70px;
    border: 30px solid #447891;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    animation: ${dot2Animation} 1000ms cubic-bezier(0.49, 0.06, 0.43, 0.85)
      infinite;
    animation-delay: 75ms;
  }

  &:nth-child(3) {
    width: 160px;
    height: 160px;
    margin-top: -80px;
    margin-left: -80px;
    border: 20px solid #6bb2cd;
    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
    transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
    animation: ${dot3Animation} 1000ms cubic-bezier(0.49, 0.06, 0.43, 0.85)
      infinite;
    animation-delay: 150ms;
  }
`;

const AppLoader = () => {
  return (
    <LoaderContainer className="loader">
      <Dot className="dot" />
      <Dot className="dot" />
      <Dot className="dot" />
    </LoaderContainer>
  );
};

export default AppLoader;
