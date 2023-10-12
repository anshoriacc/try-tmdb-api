import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/axiosInstance";

export type TMovieListResponse = {
  page: number;
  results: {
    adult: boolean;
    backdrop_path: string;
    id: number;
    original_language: string;
    title?: string;
    original_title?: string;
    name?: string;
    original_name?: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  total_pages: number;
  total_results: number;
};

export type TMovieDetailResponse = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    production_code: string;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
  };
  name: string;
  next_episode_to_air: string;
  networks: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_name: string;
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }[];
  type: string;
};

export const useGetPopular = (time: "day" | "week" = "day") =>
  useQuery({
    queryKey: ["popular", { time }],
    queryFn: async () => {
      const res = await axiosInstance.get<TMovieListResponse>(
        `trending/all/${time}`
      );
      return res.data.results;
    },
    keepPreviousData: true,
  });

export const useGetDetail = (type: string, id: number) =>
  useQuery({
    queryKey: ["detail", { type, id }],
    queryFn: async () => {
      const res = await axiosInstance.get<Partial<TMovieDetailResponse>>(
        `${type}/${id}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });
