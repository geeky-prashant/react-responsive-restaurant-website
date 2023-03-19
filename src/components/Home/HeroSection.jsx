import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import Tilt from "react-tilt";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const HeroSection = (props) => {
  return (
    <Wrapper className="wrapper-background">
      <div className="container">
        <div className="section-inner">
          <div className="section-hero-data">
            <h1 className="heading-text">
              {props.heading} <span className="meal">{props.meal}</span>
            </h1>
            <p className="hero-para">{props.para}</p>
            <Button className="btn">
              <NavLink to="/menu">
                {props.button} <BsFillArrowRightCircleFill />
              </NavLink>
            </Button>
          </div>
          <div className="section-hero-image">
            <picture>
              <Tilt className="Tilt">
                <div className="Tilt-inner">
                  <img className="hero-img" src={props.image} alt="" />
                </div>
              </Tilt>
            </picture>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .section-inner {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .heading-text {
    text-transform: uppercase;
    font-size: 4rem;
    span {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .btn {
    max-width: fit-content;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 100%;
    font-size: 1.4rem;
  }
  .section-hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .heading-text {
      text-transform: uppercase;
      font-size: 6.4rem;
    }
    .section-inner {
      flex-direction: row;
    }
    .hero-para {
      font-size: 1.6rem;
      max-width: 50rem;
    }
    a {
      font-size: 1.5rem;
    }
  }
`;

export default HeroSection;
