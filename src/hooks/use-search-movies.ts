import { useQuery } from "@tanstack/react-query";
import { getMovieSearch } from "../service/movies.service";

export function useSearchMovies(search: string) {
  return useQuery({
    queryKey: ["search-movies", search],
    queryFn: () => getMovieSearch(search),
    enabled: search.length > 0,
  });
}
