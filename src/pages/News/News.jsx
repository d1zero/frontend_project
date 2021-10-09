import React from "react";
import { Link } from "react-router-dom";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import news from "../../store/news";
import { observer } from "mobx-react";
import { Typography, Button } from "@mui/material";

const News = observer(() => {
    SetTitle("News");
    return (
        <div className="news">
            <Typography variant="h1" align="center">
                News
            </Typography>
            {news.loading ? (
                <Loader />
            ) : (
                <>
                    {news.news_array.map((item) => (
                        <div key={item.id} style={{ marginTop: "30px" }}>
                            <Typography variant="h4" gutterBottom>
                                {item.name}
                            </Typography>
                            <img
                                src={item.preview_image}
                                alt={item.name}
                                style={{
                                    height: "400px",
                                    maxHeight: "400px",

                                }}
                            />
                            <Typography
                                variant="body2"
                                gutterBottom
                                style={{ marginTop: "5px" }}
                            >
                                {item.desc}
                            </Typography>
                            <Button
                                variant="contained"
                                LinkComponent={Link}
                                to={`/news/${item.id}`}
                                style={{ marginTop: "5px" }}
                            >
                                Подробнее
                            </Button>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
});

export default News;
