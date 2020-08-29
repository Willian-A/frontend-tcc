import styled from "styled-components";

const PageNameBox = styled.div`
  display: flex;
  padding-bottom: 25px;
  margin: 20px 0 0 10px;

  h5 {
    margin-left: 10px;
    transform: translateY(35%);
  }

  @media (min-width: 1024px) {
    margin: 0;
  }
`;

const PageContainer = styled.div`
  display: flex;

  @media (min-width: 768px) {
    padding: 0 0 2vh 0;
  }

  @media (min-width: 1024px) {
    padding: 0 0 2vh 0;
  }
`;
const FilterContainer = styled.div`
  color: #fff;
  background-color: #000;
  width: 0;

  @media (min-width: 768px) {
    width: 0;
  }

  @media (min-width: 1024px) {
    width: 22vw;
    margin-right: auto;
  }

  @media (min-width: 1440px) {
    width: 16vw;
  }

  @media (min-width: 1920px) {
    width: 13vw;
  }

  @media (min-width: 2560px) {
    width: 14vw;
  }
`;
const FilterBox = styled.div`
  overflow-y: hidden;
  padding: 1vw 1vw 0;
  cursor: pointer;
  text-transform: capitalize;

  transition: 500ms;

  h3 {
    padding-bottom: 0.5vw;
    transition: 500ms;
    border-bottom: ${({ open }) => (open ? "5px solid white" : "0")};

    &:hover {
      color: #ffae00;
    }
  }
`;

const FilterOptions = styled.div`
  padding-top: ${({ open }) => (open ? "1vw" : "0")};
  height: ${({ open }) => (open ? "fit-content" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: 500ms;

  h4 {
    transition: 500ms;

    &:hover {
      color: #ffae00;
    }
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-gap: 5vw;
  margin: 0 auto;
  grid-template-columns: repeat(1, 80vw);

  @media (min-width: 768px) {
    grid-gap: 1.5vw;
    grid-template-columns: repeat(3, 30vw);
  }

  @media (min-width: 1024px) {
    grid-gap: 1vw;
    grid-template-columns: repeat(3, 23.5vw);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 15vw);
  }

  @media (min-width: 1920px) {
    grid-gap: 1.5vw;
    grid-template-columns: repeat(4, 14vw);
  }

  @media (min-width: 2560px) {
    grid-gap: 1vw;
    grid-template-columns: repeat(4, 12.5vw);
  }
`;

const CardBox = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    transition: 500ms;

    &:hover {
      filter: brightness(30%);
    }
  }
`;

const CardBio = styled.div`
  padding: 10px;
  color: black;

  h4 {
    font-size: 1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 15px;
  }
`;

export {
  PageNameBox,
  PageContainer,
  FilterContainer,
  FilterBox,
  FilterOptions,
  ProductsContainer,
  CardBox,
  CardBio,
};