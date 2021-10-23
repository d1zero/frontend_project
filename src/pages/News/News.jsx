import React from "react";
import { Link } from "react-router-dom";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react";
import { Typography, Button } from "@mui/material";
import category from "../../store/category";

const News = observer(() => {
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
                            {category?.categories[item.category - 1]?.name ? (
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    style={{ marginTop: "5px" }}
                                >
                                    Category:{" "}
                                    {
                                        category?.categories[item.category - 1]
                                            ?.name
                                    }
                                </Typography>
                            ) : (
                                ""
                            )}
                            <Typography
                                variant="body2"
                                gutterBottom
                                style={{ marginTop: "5px" }}
                            >
                                {item.shortDesc}
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
