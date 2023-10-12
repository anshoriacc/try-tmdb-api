import { useEffect } from "react";

const useTitle = (title: string) => {
  useEffect(() => {
    if (document.title !== title) document.title = `${title} | TRY TMDB API`;
  }, [title]);
};

export default useTitle;
