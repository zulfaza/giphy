import { ImageList, ImageListItem } from "@mui/material";
import GIF from "component/gif";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchBar from "../../component/searchbar/index";
// import { updateKeyword } from "../../core/redux/slice";
import { updateGifs, updateKeyword } from "../../core/redux/action";

type gifapi = {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  images: {
    [key: string]: {
      url: string;
    };
  };
};

type selectorType = {
  search: {
    gifs: gifapi[];
    keyword: string;
  };
};

const Home = () => {
  const currentKeyword = useSelector(
    (state: selectorType) => state.search.keyword
  );
  const gifs = useSelector((state: selectorType) => state.search.gifs);
  const dispatch = useDispatch();

  const getGifs = async () => {
    const gifs = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${currentKeyword}&api_key=9V4YqJpwVJzOgdn8xbakWUECObdbD9Qx&limit=12`
    )
      .then((res) => res.json())
      .then((res) => res.data);
    dispatch(updateGifs(gifs));
  };

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=null&api_key=9V4YqJpwVJzOgdn8xbakWUECObdbD9Qx&limit=12`
    )
      .then((res) => res.json())
      .then((res) => dispatch(updateGifs(res.data)));
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getGifs();
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) dispatch(updateKeyword(e.target.value));
    else dispatch(updateKeyword(null));
  };

  return (
    <>
      <h1>Giphy</h1>
      <div style={{ marginBottom: "10px" }}>
        <Link to="/trending">Liat Trending</Link>
      </div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <h3>Keyword dari redux: {currentKeyword}</h3>
      <ImageList variant="masonry" cols={3} gap={20}>
        {gifs.length > 0 &&
          gifs.map((gif) => (
            <ImageListItem key={gif.id}>
              <GIF url={gif.images.fixed_width.url} title={gif.title} />
            </ImageListItem>
          ))}
      </ImageList>
    </>
  );
};

export default Home;
