import styled from "styled-components";

export const MainContainer = styled.div`
  padding-top: 70px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 32px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 768px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 576px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  margin: 0 auto;
  justify-items: center;
  align-items: center;
  padding-inline: 24px;
  padding-top: 44px;
  padding-bottom: 44px;
`;

export const EmptyState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
  color: #666;
  font-size: 1.2rem;
  text-align: center;
`;
