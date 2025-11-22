import styled from "styled-components";

export const Container = styled.div`
  width: 220px;
  height: 360px;
  background: #111827;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

export const InfosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #f3f4f6;
  margin: 0;

  height: 40px;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const BottomInfo = styled.div`
  margin-top: auto;
  width: 100%;
  align-items: center;
`;

export const ReleaseDate = styled.span`
  font-size: 13px;
  color: #9ca3af;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #f3f4f6;
  font-size: 14px;
`;

export const StarsWrapper = styled.div`
  position: relative;
  font-size: 14px;
  line-height: 1;
`;

export const EmptyStars = styled.div`
  color: #4b5563;
`;

export const FullStars = styled.div<{
  $width: number;
  $positiveRating: boolean;
}>`
  color: ${({ $positiveRating }) => ($positiveRating ? "gold" : "green")};
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ $width }) => $width}%;
  white-space: nowrap;
`;
