import styled from "styled-components";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 0 7rem;
  @media screen and (max-width: 768px) {
    align-items: center;

    padding: 0 7rem;
  }
`;
export const NewsH1 = styled.h1`
  margin-top: 40px;
`;
export const NewsText = styled.p`
  color: #255bcf;
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    text-align: left;
    display: none;
  }
`;
export const NewsMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 50px;
  line-height: 1.6;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(2, fr);
  }
`;
export const NavigationButtons = styled.div`
  position: relative;
  float: right;
`;
export const Pagination = styled.nav`
  background: #d9d9d9;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const PaginationNo = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span:first-child {
    width: 20px;
    text-align: center;
    border-top: 2px solid black;
  }
  span {
    padding: 0.5rem 0;
    margin-right: 30px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const NextBtn = styled(GrFormNext)`
  font-size: 35px;
`;
export const PrevtBtn = styled(GrFormPrevious)`
  font-size: 35px;
  color: grey;
`;

// export const NewsMenu = styled.div``;
