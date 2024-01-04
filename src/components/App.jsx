import { Route, Routes } from "react-router-dom";
import { theMovieTrendingAPI } from 'services/api';
import Layout from './Header/Header';
import { lazy } from 'react';

// export const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage list={theMovieTrendingAPI()} />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
