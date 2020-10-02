import React, { useEffect, useState } from "react";
import { API_URL, API_KEY, IMAGE_BASE_URL } from "../../Config";
import { Typography } from "antd";
import MainImage from "./Sections/MainImage";

const { Title } = Typography;

const LandingPage = () => {
  const [Movies, setMovies] = useState([]);
  const [MainMovieImage, setMainMovieImage] = useState(null);

  useEffect(() => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(endpoint)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setMovies([res.results]);
        setMainMovieImage(res.results[0]);
      });
  }, []);
  // MainMovieImage is existed then do something

  return (
    <div style={{ width: "100%", margin: "0" }}>
      {MainMovieImage && (
        <MainImage
          title={MainMovieImage.original_title}
          text={MainMovieImage.overview}
          image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
        />
      )}
      <div style={{ width: "85%", margin: "1rem auto" }}>
        <Title level={2}> Movies by latest </Title>
        <hr />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default LandingPage;
