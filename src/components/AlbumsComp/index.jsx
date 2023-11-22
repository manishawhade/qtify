import { useMemo, useState } from "react";
import { Typography, Button, List, ListItem } from "@mui/material";
import Card from "../Card";
import "./index.css";

import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AlbumsComp = ({ title, data, genre }) => {
  const [isToggle, setisToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState("All");
  const [songs, setsongs] = useState(null);
  console.log(genre);
  useMemo(() => {
    if (title === "Songs") {
      if (selectedItem === "All") {
        setsongs(data);
      } else {
        setsongs(data.filter((x) => x.genre.key === selectedItem));
      }
    }
  }, [selectedItem]);
  return (
    <>
      <div className="albums-div">
        <Typography variant="h6">{title}</Typography>
        <Button
          style={{ color: "#34c94b" }}
          variant="text"
          onClick={() => setisToggle(!isToggle)}
        >
          {isToggle ? "Collapse" : "Show All"}
        </Button>
      </div>
      {data && (
        <>
          {genre && (
            <List className="songs-filter">
              <ListItem
                key="All"
                className={selectedItem == "All" ? "seleted-item" : ""}
                onClick={() => setSelectedItem("All")}
              >
                All
              </ListItem>
              {genre.map(({ key, label }) => (
                <ListItem
                  key={key}
                  className={selectedItem == key ? "seleted-item" : ""}
                  onClick={() => setSelectedItem(key)}
                >
                  {label}
                </ListItem>
              ))}
            </List>
          )}
          {songs ? (
            <DataGrid isToggle={isToggle} data={songs} />
          ) : (
            <DataGrid isToggle={isToggle} data={data} />
          )}
        </>
      )}
    </>
  );
};
export default AlbumsComp;

const DataGrid = ({ isToggle, data }) => {
  return (
    <>
      {isToggle ? (
        <div className="card-wrapper">
          {data && data.map((item) => <Card key={item.id} {...item} />)}
        </div>
      ) : (
        <Swiper
          style={{ height: "340px", padding: "0 12px 0 12px" }}
          modules={[Navigation, Scrollbar, A11y]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            639: {
              slidesPerView: 3,
            },
            865: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
            1400: {
              slidesPerView: 7,
            },
          }}
          navigation={{
            nextEl: ".arrow-button-next",
            prevEl: ".arrow-button-prev",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <div className="card-wrapper">
            {data &&
              data.map((item) => (
                <SwiperSlide key={item.id}>
                  <Card {...item} />
                </SwiperSlide>
              ))}
          </div>
          <button className="arrow-button-prev arrow"></button>
          <button className="arrow-button-next arrow"></button>
        </Swiper>
      )}
    </>
  );
};
