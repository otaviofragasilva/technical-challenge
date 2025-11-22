import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../service/movies.service";

export function useMovieDetails(id: string) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  });
}
