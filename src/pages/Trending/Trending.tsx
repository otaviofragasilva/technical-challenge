import { Card } from "../../components/Card/Card";
import { useSearch } from "../../hooks/use-search";
import { useTrendingMovies } from "../../hooks/use-trending-movies";
import { useSearchMovies } from "../../hooks/use-search-movies";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";

export const TrendingPage = () => {
  const { search } = useSearch();
  const navigate = useNavigate();
  const trending = useTrendingMovies();
  const searchMovies = useSearchMovies(search);

  const isLoading = search ? searchMovies.isLoading : trending.isLoading;

  const isError = search ? searchMovies.isError : trending.isError;

  const movies =
    search.length > 0
      ? searchMovies.data?.results ?? []
      : trending.data?.results ?? [];

  const filteredMovies = movies
    ?.filter((movie) =>
      search ? movie.title.toLowerCase().includes(search.toLowerCase()) : true
    )
    .sort((a, b) => b.vote_average - a.vote_average);

  const isAbleToRender =
    !isLoading && !isError && filteredMovies && filteredMovies.length > 0;

  return (
    <S.MainContainer>
      {isLoading && <Loader />}

      {isError && (
        <S.EmptyState>
          Erro ao carregar os filmes. Tente novamente.
        </S.EmptyState>
      )}

      {!isAbleToRender && (
        <S.EmptyState>
          {search
            ? `Nenhum resultado encontrado para "${search}".`
            : "Nenhum filme disponível."}
        </S.EmptyState>
      )}

      {isAbleToRender && (
        <S.Container>
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => navigate(`movie-details/${movie.id}`)}
            >
              <Card
                key={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                imageUrl={movie.poster_path}
                releaseDate={movie.release_date}
              />
            </div>
          ))}
        </S.Container>
      )}
    </S.MainContainer>
  );
};
