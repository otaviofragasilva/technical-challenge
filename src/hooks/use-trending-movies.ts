import { useQuery } from "@tanstack/react-query";
import { getTrendingMovies } from "../service/movies.service";

export function useTrendingMovies() {
  return useQuery({
    queryKey: ["trending-movies"],
    queryFn: () => getTrendingMovies(),
  });
}
