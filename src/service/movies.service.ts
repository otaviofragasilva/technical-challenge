import type { MovieDetails } from "../interfaces/movie-deitails";
import type { MovieListResponse } from "../interfaces/trend-movie";
import api from "./api";

export async function getTrendingMovies(page = 1) {
  const res = await api.get<MovieListResponse>("/trending/movie/week", {
    params: { language: "pt-BR", page },
  });
  return res.data;
}

export async function getMovieSearch(movie: string, page = 1) {
  const res = await api.get<MovieListResponse>("/search/movie", {
    params: { query: movie, language: "pt-BR", page },
  });
  return res.data;
}

export async function getMovieDetails(id: string) {
  const res = await api.get<MovieDetails>(`/movie/${id}`, {
    params: {
      language: "pt-BR",
    },
  });
  return res.data;
}
