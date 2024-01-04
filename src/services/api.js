import axios from "axios";

const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzZjYjNiYTBiZDU5NjE0Y2VkOTM3MWVmZjMxNzMwNyIsInN1YiI6IjY1ODlmY2NjZGQyNTg5NzFhZTZiYjYyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T3rHOhoHZyXT-8sHq1JWZySXXj2vsxXcDGIYeMsfOuU'
const BASE_URL = 'https://api.themoviedb.org/3'
let targeturl = '';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: API_KEY
  }
};

const theMovieTrendingAPI = async () => {
  targeturl = '/trending/movie/day'
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data.results)
  return response
}

const theMovieSearchAPI = async (query) => {
  targeturl = '/search/movie'
  const searchQuery = `${query}`
  const response = await axios(`${BASE_URL}${targeturl}${searchQuery}`, options).then(response => response.data.results)
  return response
}

const theMovieDetailsAPI = async (id) => {
  targeturl = `/movie/${id}`
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data)
  return response
}

const theMovieCastAPI = async (id) => {
  targeturl = `/movie/${id}/credits`
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data.cast)
  return response
}

const theMovieReviewsAPI = async (id) => {
  targeturl = `/movie/${id}/reviews`
  const response = await axios(`${BASE_URL}${targeturl}`, options).then(response => response.data.results)
  return response
}

export { theMovieTrendingAPI, theMovieSearchAPI, theMovieDetailsAPI, theMovieCastAPI, theMovieReviewsAPI };