import React from "react";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import { observer } from "mobx-react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const NewsDetail = observer((props) => {
    const [name, setName] = React.useState("");
    const [comment, setComment] = React.useState("");

    const [nameError, setNameError] = React.useState(false);
    const [commentError, setCommentError] = React.useState(false);

    const [nameErrorText, setNameErrorText] = React.useState("");
    const [commentErrorText, setCommentErrorText] = React.useState("");

    const [news, setNews] = React.useState();
    const [loading, setLoading] = React.useState(true);

    const [comments, setComments] = React.useState();
    const [commentsLoading, setCommentsLoading] = React.useState(true);

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

    React.useEffect(() => {
        setCommentsLoading(true);
        fetch(`https://demo-api.vsdev.space/api/articles/${article_id}/comments`)
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    setComments(data);
                    setCommentsLoading(false);
                }, 1000);
            });
    }, [article_id]);

    SetTitle(`Article #${article_id}`);
    const addComment = () => {
        if (name.length > 0 && comment.length > 0) {
            setCommentsLoading(true);
            fetch(
                `https://demo-api.vsdev.space/api/articles/${article_id}/comments`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: name,
                        comment: comment,
                    }),
                },
            )
                .then((res) => res.json())
                .then(() => {
                    setCommentsLoading(true);
                    fetch(
                        `https://demo-api.vsdev.space/api/articles/${article_id}/comments`,
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            setTimeout(() => {
                                setComment("");
                                setName("");
                                setComments(data);
                                setCommentsLoading(false);
                            }, 1000);
                        });
                });
        }
        if (name.length === 0) {
            setNameError(true);
            setNameErrorText("Comment cannot be empty");
        } else {
            setNameError(false);
            setNameErrorText("");
        }
        if (comment.length === 0) {
            setCommentError(true);
            setCommentErrorText("Comment cannot be empty");
        } else {
            setCommentError(false);
            setCommentErrorText("");
        }
    };
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
                    {commentsLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <Typography
                                variant="h4"
                                style={{ margin: "30px 0 10px" }}
                                gutterBottom
                            >
                                Comments
                            </Typography>
                            {comments.map((comment) => (
                                <div
                                    key={comment.id}
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Typography variant="h6">
                                        {comment.user_name}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        {comment.comment}
                                    </Typography>
                                </div>
                            ))}
                            <Typography
                                variant="h5"
                                style={{ margin: "40px 0 20px" }}
                            >
                                Send your comment
                            </Typography>
                            <Box component="form">
                                <TextField
                                    type="text"
                                    value={name}
                                    label="Your name"
                                    onChange={(e) => setName(e.target.value)}
                                    style={{ marginBottom: "20px" }}
                                    required
                                    error={nameError}
                                    helperText={nameErrorText}
                                />
                                <br />
                                <TextField
                                    label="Comment text"
                                    multiline
                                    maxRows={4}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    variant="outlined"
                                    style={{ marginBottom: "20px" }}
                                    required
                                    error={commentError}
                                    helperText={commentErrorText}
                                />
                            </Box>
                            <br />
                            <Button onClick={addComment} variant="contained">
                                Add comment
                            </Button>
                        </>
                    )}
                </>
            )}
        </div>
    );
});

export default NewsDetail;
