import React from "react";
import { Link } from "react-router-dom";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import news from "../../store/news";
import { observer } from "mobx-react";
import { useStyles } from "./newsStyles";

const News = observer(() => {
    SetTitle("News");
    const classes = useStyles();
    return (
        <div className="news">
            <h1>News</h1>
            {news.loading ? (
                <Loader />
            ) : (
                <>
                    {news.news_array.map((item) => (
                        <Link
                            key={item.id}
                            to={`/news/${item.id - 1}`}
                            className={classes.navLink}
                        >
                            <h3>{item.name}</h3>
                            <img src={item.preview_image} alt={item.name} />
                            <p>{item.desc}</p>
                        </Link>
                    ))}
                </>
            )}
        </div>
    );
});

export default News;
