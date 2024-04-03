import React, { useState } from 'react';

const ReactionBlock = () => {
    const [likes, setLikes] = useState(Math.floor(Math.random() * 51));
    const [dislikes, setDislikes] = useState(0);
    const [liked, setLiked] = useState(false); 
    const [disliked, setDisliked] = useState(false); 

    const handleLikeClick = () => {
        if (!liked) {
            setLikes(likes + 1); 
            setLiked(true); 
            if (disliked) {
                setDislikes(dislikes - 1);
                setDisliked(false);
            }
        }
    };

    const handleDislikeClick = () => {
        if (!disliked) {
            setDislikes(dislikes + 1); 
            setDisliked(true); 
            if (liked) {
                setLikes(likes - 1);
                setLiked(false);
            }
        }
    };

    return (
        <div className="reactionBlock">
            <span style={{ cursor: 'pointer' }} role="img" aria-label="like" onClick={handleLikeClick}>👍</span>
            <span>{likes}</span>
            <span style={{ marginLeft: '10px', cursor: 'pointer' }} role="img" aria-label="dislike" onClick={handleDislikeClick}>👎</span>
            <span>{dislikes}</span>
        </div>
    );
}

export default ReactionBlock;
