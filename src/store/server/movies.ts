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
