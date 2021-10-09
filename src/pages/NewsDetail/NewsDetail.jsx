import React from "react";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import news from "../../store/news";
import comments from "../../store/comments";
import { observer } from "mobx-react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const NewsDetail = observer((props) => {
    const [name, setName] = React.useState("");
    const [comment, setComment] = React.useState("");

    const [nameError, setNameError] = React.useState(false)
    const [commentError, setCommentError] = React.useState(false)

    const [nameErrorText, setNameErrorText] = React.useState('')
    const [commentErrorText, setCommentErrorText] = React.useState('')

    let article_id = props.match.params.id;
    SetTitle(`Article #${article_id}`);
    const addComment = () => {
        if (name.length > 0 && comment.length > 0) {
            comments.addComment({
                id: comments.comments_array.length + 1,
                name: name,
                comment: comment,
            });
            setComment("");
            setName("");
            setNameError(false)
            setNameErrorText('')
            setCommentError(false)
            setCommentErrorText('')
        }
        if (name.length <= 0) {
            setNameError(true)
            setNameErrorText('Username cannot be empty')
        } else {
            setNameError(false)
            setNameErrorText('')
        }
        if (comment.length <= 0) {
            setCommentError(true)
            setCommentErrorText('Comment cannot be empty')
        } else {
            setCommentError(false)
            setCommentErrorText('')
        }
    };
    return (
        <div className="news-detail">
            {news.loading ? (
                <Loader />
            ) : (
                <>
                    <Typography variant="h2" align="center" gutterBottom>
                        {news.news_array[article_id - 1].name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {news.news_array[article_id - 1].desc}
                    </Typography>
                    <img
                        src={"/" + news.news_array[article_id - 1].full_image}
                        alt={news.news_array[article_id - 1].name}
                        height="400px"
                        loading="lazy"
                    />
                    <br />
                    <Typography variant="caption" gutterBottom>
                        Published on {news.news_array[article_id - 1].date}
                    </Typography>
                    {comments.loading ? (
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
                            {comments.comments_array.map((comment) => (
                                <div
                                    key={comment.id}
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Typography variant="h6">
                                        {comment.name}
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
