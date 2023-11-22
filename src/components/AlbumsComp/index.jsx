import { useState } from "react";
import { Typography, Button } from "@mui/material";
import Card from "../Card";
import "./index.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AlbumsComp = ({ title, data }) => {
  const [isToggle, setisToggle] = useState(false);

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
      {isToggle ? (
        <div className="card-wrapper">
          {data && data.map((item) => <Card key={item.id} {...item} />)}
        </div>
      ) : (
        <Swiper
          style={{ height: "300px", padding: "0 12px 0 12px" }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={7}
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

export default AlbumsComp;
