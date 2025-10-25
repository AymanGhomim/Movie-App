import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails";
import Wishlist from "./pages/Wishlist";
import SearchResults from "./pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MoviesList /> },
      { path: "movie/:id", element: <MovieDetails /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "search/:query", element: <SearchResults /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);