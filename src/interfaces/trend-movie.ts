export interface MovieItem {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  page: number;
  total_pages: number;
}

export interface MovieListResponse {
  results: MovieItem[];
  page: number;
  total_pages: number;
}
