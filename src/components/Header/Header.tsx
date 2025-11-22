import { Outlet, NavLink } from "react-router-dom";
import * as S from "./styles";
import { useSearch } from "../../hooks/use-search";

export const Header = () => {
  const { search, setSearch } = useSearch();

  return (
    <S.PageContainer>
      <S.Container>
        <S.Logo>TRENDING MOVIES</S.Logo>

        <S.Nav>
          <S.NavItemStyled as={NavLink} to="/">
            Trending
          </S.NavItemStyled>
        </S.Nav>
        <S.SearchInput
          placeholder="Buscar filmes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </S.Container>
      <Outlet />
    </S.PageContainer>
  );
};
