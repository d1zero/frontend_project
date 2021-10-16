import React from "react";
import SetTitle from "../../hooks/setTitle";
import { Link } from "react-router-dom";
import { Link as MUILink, Typography, Container } from "@mui/material";
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

    const [news, setNews] = React.useState();
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        setLoading(true);
        fetch("https://demo-api.vsdev.space/api/articles")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setNews(data);
                    setLoading(false);
                }, 1000);
            });
    }, []);

    return (
        <div style={{ marginTop: "100px" }}>
            <Typography variant="h2" align="center" gutterBottom>
                Hello and welcome to our news portal!
            </Typography>
            <Typography variant="h4" align="center" gutterBottom>
                Go to{" "}
                <MUILink
                    component={Link}
                    to="/news"
                    className={classes.navLink}
                >
                    news
                </MUILink>{" "}
                to check out fresh news
            </Typography>
            {!loading ? (
                <Container maxWidth="sm" style={{ marginTop: "50px" }}>
                    <Swiper
                        spaceBetween={100}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true }}
                        allowTouchMove
                        loop
                    >
                        {news
                            .filter((news) => news.slider === true)
                            .map((news) => (
                                <SwiperSlide
                                    className={classes.slide}
                                    key={news.id}
                                >
                                    <img
                                        src={news.preview_image}
                                        alt={news.name}
                                        style={{
                                            height: "300px",
                                            objectFit: "cover",
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </Container>
            ) : (
                <Loader />
            )}
        </div>
    );
});

export default MainPage;
