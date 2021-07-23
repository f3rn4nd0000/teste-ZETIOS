import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(1366)};
    min-height: ${px2vw(768)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;
  text-align: center;
  
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;
  
export const BoxButton = styled.button`
  color: #650;
  width: 150px;

    @media (min-width: 1024px) {
    font-size: 2rem;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 15px;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const BoxButton2 = styled.button`
  color: #650;
  width: 150px;

  @media (min-width: 1024px) {
    font-size: 2rem;
    margin-top: 90px;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 15px;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const BoxInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 300px; 
  background: papayawhip;
  border: none;
  border-radius: 3px;

  @media (min-width: 1024px) {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 15px;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

`;

