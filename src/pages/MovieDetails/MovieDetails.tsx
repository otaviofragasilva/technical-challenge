import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../service/movies.service";
import * as S from "./styles";
import type { Genre } from "../../interfaces/movie-deitails";
import { ImageOff, Loader, Star } from "lucide-react";

export const MovieDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => getMovieDetails(id!),
    enabled: !!id,
  });

  if (isLoading) return <Loader />;
  if (!data) return <p>Filme não encontrado.</p>;

  return (
    <S.PageWrapper>
      <S.PosterSection>
        {!data.backdrop_path ? (
          <S.ImageOffContainer>
            <ImageOff size={50} />
          </S.ImageOffContainer>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
            alt=""
          />
        )}

        <S.BackButton onClick={() => navigate(-1)}>❮ Voltar</S.BackButton>
        <S.GradientOverlay />
      </S.PosterSection>

      <S.InfoSection>
        <S.Title>{data.title}</S.Title>

        <S.SubInfo>
          <Star
            alignmentBaseline="baseline"
            size={18}
            color="gold"
            fill="gold"
          />
          {data.vote_average.toFixed(1)} • {data.runtime} min •{" "}
          {data.release_date?.slice(0, 4)}
        </S.SubInfo>

        <S.TagList>
          {data.genres?.map((genre: Genre) => (
            <S.Tag key={genre.id}>{genre.name}</S.Tag>
          ))}
        </S.TagList>

        <S.Overview>{data.overview}</S.Overview>
      </S.InfoSection>
    </S.PageWrapper>
  );
};
