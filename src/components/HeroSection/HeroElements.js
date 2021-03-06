import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 500px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%); */
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
`;
export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  -o-bject-fit: cover;
  object-fit: cover;
  background: #232a34;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroSubContainer = styled.div`
  height: 100%;
  width: 270px;
  border: 2px solid white;
  position: relative;
  left: 30rem;
  bottom: 10rem;
  opacity: 0.8;
  background: #f5f5ff;
  padding: 11.9rem 15px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeroH1 = styled.h1`
  text-align: left;
  margin-top: 210px;
  font-size: 30px;
  opacity: 1;
  color: rgb(0, 0, 0);
`;
export const HeroP = styled.p`
  margin-top: 50px;
  color: #fff;
  text-align: center;
  font-size: 30px;
  max-width: 600px;
  color: #255bcf;
  font-weight: bold;
  text-transform: uppercase;
  opacity: 100%;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
