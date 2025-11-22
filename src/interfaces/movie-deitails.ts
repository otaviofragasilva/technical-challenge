export interface Genre {
  id: string;
  name: string;
}

export interface MovieDetails {
  backdrop_path: string;
  title: string;
  vote_average: number;
  release_date: string;
  runtime: string;
  overview: string;
  genres: Genre[];
}
