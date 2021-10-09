import React from "react";
import SetTitle from "../../hooks/setTitle";
import { Link } from "react-router-dom";
import { Link as MUILink, Typography, Container } from "@mui/material";
import news from "../../store/news";
import { useStyles } from "./mainPageStyles";
import { observer } from "mobx-react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
import Loader from "../../components/Loader/Loader";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const MainPage = observer(() => {
    const classes = useStyles();
    SetTitle("Main page");
    return (
        <div style={{marginTop: '100px'}}>
            <Typography variant="h3" align="center">
                Hello and welcome to our news portal!
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
                Go to{" "}
                <MUILink component={Link} to="/news">
                    news
                </MUILink>{" "}
                to check out fresh news
            </Typography>
            {!news.loading ? (
                <Container maxWidth="sm">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        allowTouchMove
                        loop
                    >
                        {news.news_array.map((news) => {
                            if (news.slider === true) {
                                return (
                                    <SwiperSlide className={classes.slide}>
                                        <img
                                            src={news.preview_image}
                                            alt={news.name}
                                            style={{
                                                height: "300px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </SwiperSlide>
                                );
                            }
                        })}
                    </Swiper>
                </Container>
            ) : (
                <Loader />
            )}
        </div>
    );
});

export default MainPage;
