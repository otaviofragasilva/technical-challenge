import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #0d0d0d;
  color: white;
  min-height: 100vh;
`;

export const PosterSection = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;

  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
    object-position: center;
    z-index: 1;
    position: relative;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4) 0%,
      /* mais escuro embaixo */ rgba(0, 0, 0, 0) 100%
        /* transparente pra cima */
    );
    z-index: 2;
    pointer-events: none;
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 0, 0, 0.85) 100%
  );
`;

export const InfoSection = styled.div`
  padding: 32px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: -80px;
  z-index: 10;
  position: relative;

  @media (max-width: 768px) {
    margin-top: -40px;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const SubInfo = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  color: #ccc;
  padding-bottom: 20px;
`;

export const TagList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Tag = styled.span`
  background: #1f2937;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

export const Overview = styled.p`
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  color: white;

  border: none;
  border-radius: 8px;

  padding: 10px 14px;
  font-size: 16px;
  cursor: pointer;

  z-index: 20;
  transition: 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    top: 10px;
    left: 10px;
    padding: 8px 12px;
    font-size: 14px;
  }
`;

export const ImageOffContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: center;
`;
