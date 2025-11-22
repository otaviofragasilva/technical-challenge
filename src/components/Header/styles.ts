import styled from "styled-components";

export const Container = styled.header`
  height: 70px;
  right: 0;
  left: 0;
  top: 0;
  background: #0d0d0d;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid #222;
  z-index: 9999;
  position: sticky;

  @media (max-width: 600px) {
    height: auto;
    flex-direction: column;
    padding: 12px 16px;
    gap: 12px;
    align-items: flex-start;
  }
`;

export const Logo = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #4cc1f7;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: flex-start;
    gap: 16px;
    order: 3;
  }
`;

export const NavItemStyled = styled.a`
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  transition: 0.3s ease;

  &.active {
    background-color: #0d6efd;
    color: white;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const PageContainer = styled.div`
  top: 0;
`;

export const SearchInput = styled.input`
  padding: 8px 12px;
  width: 180px;
  background: #1f2937;
  border: none;
  border-radius: 8px;
  outline: none;
  color: white;
  font-size: 14px;

  &:focus {
    background: #374151;
  }

  @media (max-width: 500px) {
    width: 180px;
    order: 2;
  }
`;
