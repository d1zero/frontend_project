import React from "react";
import SetTitle from "../../hooks/setTitle";
import Loader from "../../components/Loader/Loader";
import news from "../../store/news";
import comments from "../../store/comments";
import { observer } from "mobx-react";

const NewsDetail = observer((props) => {
    const [name, setName] = React.useState('')
    const [comment, setComment] = React.useState('')
    let article_id = props.match.params.id;
    SetTitle(`Article #${article_id}`);
    const addComment = () => {
        let new_arr = comments.comments_array
        new_arr.push({
            id: new_arr.length +1,
            name: name,
            comment: comment
        })
        comments.setComments(new_arr)
        setComment('')
        setName('')
    }
    return (
        <div className="news-detail">
            {news.loading ? (
                <Loader />
            ) : (
                <>
                    <h1>{news.news_array[article_id].name}</h1>
                    <p>{news.news_array[article_id].desc}</p>
                    <img
                        src={"/" + news.news_array[article_id].full_image}
                        alt={news.news_array[article_id].name}
                        height="600px"
                    />
                    <p>Published {news.news_array[article_id].date}</p>
                    {comments.loading ? (
                        <Loader />
                    ) : (
                        <>
                        <ul>
                            {comments.comments_array.map((comment) => (
                                <li>
                                    {comment.name}
                                    <p>{comment.comment}</p>
                                </li>
                            ))}
                        </ul>
                        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                        <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                        <button style={{marginBottom: '10px'}} onClick={addComment}>Add comment</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
});

export default NewsDetail;
