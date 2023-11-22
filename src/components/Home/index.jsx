import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import AlbumsComp from "../AlbumsComp";

const BASE_URL = "https://qtify-backend-labs.crio.do";

const Home = () => {
  const [topAlbum, settopAlbum] = useState(null);

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  const fetchTopAlbums = () => {
    axios
      .get(`${BASE_URL}/albums/top`)
      .then((result) => {
        settopAlbum(result.data);
      })
      .catch((err) => {});
  };

  return (
    <div style={{ padding: "0 40px 0 40px" }}>
      <>
        <AlbumsComp title={"Top Albums"} data={topAlbum} />
      </>
    </div>
  );
};

export default Home;
