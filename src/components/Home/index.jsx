import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import AlbumsComp from "../AlbumsComp";

const BASE_URL = "https://qtify-backend-labs.crio.do";

const Home = () => {
  const [topAlbum, settopAlbum] = useState(null);
  const [newAlbum, setnewAlbum] = useState(null);
  const [songs, setsongs] = useState(null);
  const [genres, setgenres] = useState(null);

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    // // fetchAlbumDetail()
    // fetchSongs();
    // fetchGenres();
  }, []);

  const fetchTopAlbums = () => {
    axios
      .get(`${BASE_URL}/albums/top`)
      .then((result) => {
        settopAlbum(result.data);
      })
      .catch((err) => {});
  };
  const fetchNewAlbums = () => {
    axios
      .get(`${BASE_URL}/albums/new`)
      .then((result) => {
        setnewAlbum(result.data);
      })
      .catch((err) => {});
  };
  const fetchAlbumDetail = (slug) => {
    axios
      .get(`${BASE_URL}/albums/${slug}`)
      .then((result) => {
        setnewAlbum(result.data);
      })
      .catch((err) => {});
  };
  const fetchSongs = () => {
    axios
      .get(`${BASE_URL}/songs`)
      .then((result) => {
        setsongs(result.data);
      })
      .catch((err) => {});
  };
  const fetchGenres = () => {
    axios
      .get(`${BASE_URL}/genres`)
      .then((result) => {
        setgenres(result.data);
      })
      .catch((err) => {});
  };

  return (
    <div style={{ padding: "0 40px 0 40px" }}>
      <>
        <AlbumsComp title={"Top Albums"} data={topAlbum} />
        <AlbumsComp title={"New Albums"} data={newAlbum} />
      </>
    </div>
  );
};

export default Home;
