import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { TrendingPage } from "../pages/Trending/Trending";
import { MovieDetailsPage } from "../pages/MovieDetails/MovieDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "", element: <TrendingPage /> },
      { path: "movie-details/:id", element: <MovieDetailsPage /> },
    ],
  },
]);
