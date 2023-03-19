import React from "react";
import Menuitems from "./Menuitems";
import Mdata from "./Mdata";
import styled from "styled-components";

const Menu = ({ innerPage }) => {
  return (
    <Wrapper>
      {!innerPage && (
        <h1 className="menu-heading wrapper-background">
          Food <span className="menu-sub-heading">Menu</span>
        </h1>
      )}
      <div className="container">
        <div className="products-container">
          <div className="products">
            <Menuitems
              id={Mdata[0].id}
              imgsrc={Mdata[0].imgsrc}
              pname={Mdata[0].pname}
              price={Mdata[0].price}
            />
            <Menuitems
              id={Mdata[1].id}
              imgsrc={Mdata[1].imgsrc}
              pname={Mdata[1].pname}
              price={Mdata[1].price}
            />
            <Menuitems
              id={Mdata[2].id}
              imgsrc={Mdata[2].imgsrc}
              pname={Mdata[2].pname}
              price={Mdata[2].price}
            />
            <Menuitems
              id={Mdata[3].id}
              imgsrc={Mdata[3].imgsrc}
              pname={Mdata[3].pname}
              price={Mdata[3].price}
            />
            <Menuitems
              id={Mdata[4].id}
              imgsrc={Mdata[4].imgsrc}
              pname={Mdata[4].pname}
              price={Mdata[4].price}
            />
            <Menuitems
              id={Mdata[5].id}
              imgsrc={Mdata[5].imgsrc}
              pname={Mdata[5].pname}
              price={Mdata[5].price}
            />
            <Menuitems
              id={Mdata[6].id}
              imgsrc={Mdata[6].imgsrc}
              pname={Mdata[6].pname}
              price={Mdata[6].price}
            />
            <Menuitems
              id={Mdata[7].id}
              imgsrc={Mdata[7].imgsrc}
              pname={Mdata[7].pname}
              price={Mdata[7].price}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .menu-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .menu-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .products-container {
    margin: 5rem 0;
    .sec-heading {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
    }
    .products {
      display: flex;
      flex-flow: wrap;
      align-items: flex-start;
      justify-content: center;
      column-gap: 2.5rem;
      row-gap: 4.5rem;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .menu-heading {
      font-size: 4rem;
    }
    .products-container {
      margin: 5rem 0 12rem;
    }
  }
`;

export default Menu;
