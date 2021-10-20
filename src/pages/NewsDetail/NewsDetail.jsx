import React from "react";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react";
import { Typography } from "@mui/material";
import Comments from "../../components/Comments/Comments";

const NewsDetail = observer((props) => {


    const [news, setNews] = React.useState();
    const [loading, setLoading] = React.useState(true);

    let article_id = props.match.params.id;

    React.useEffect(() => {
        setLoading(true);
        fetch(`https://demo-api.vsdev.space/api/articles/${article_id}`)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setNews(data);
                    setLoading(false);
                }, 1000);
            });
    }, [article_id]);

    SetTitle(`Article #${article_id}`);

    return (
        <div className="news-detail">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Typography variant="h2" align="center" gutterBottom>
                        {news.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {news.desc}
                    </Typography>
                    <img
                        src={"/" + news.full_image}
                        alt={news.name}
                        height="400px"
                        loading="lazy"
                    />
                    <br />
                    <Typography variant="caption" gutterBottom>
                        Published on {news.date}
                    </Typography>
                    <Comments article_id={article_id}/>
                </>
            )}
        </div>
    );
});

export default NewsDetail;
