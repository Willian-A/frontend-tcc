import styled from "styled-components";

const PageNameBox = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 25px;

  h5 {
    margin-left: 10px;
    transform: translateY(35%);
  }
`;

const CartListContainer = styled.div`
  width: 100%;
  position: relative;
  margin-right: 25px;
`;

const ResumeContainer = styled.div`
  width: 30%;
  height: 100%;
  padding: 15px 20px;
  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.1);
`;

export { PageNameBox, CartListContainer, ResumeContainer };