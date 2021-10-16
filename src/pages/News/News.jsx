import React from "react";
import { Link } from "react-router-dom";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react";
import { Typography, Button } from "@mui/material";

const News = observer(() => {
    const [news, setNews] = React.useState()
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setLoading(true);
        fetch("http://demo-api.vsdev.space/api/articles")
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setNews(data);
                    setLoading(false);
                }, 1000);
            });
    }, []);
    SetTitle("News");
    return (
        <div className="news">
            <Typography variant="h1" align="center">
                News
            </Typography>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {news.map((item) => (
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
