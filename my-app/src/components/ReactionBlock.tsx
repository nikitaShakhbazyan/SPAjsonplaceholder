import React, { useState } from 'react';

const ReactionBlock = () => {
    const [likes, setLikes] = useState(Math.floor(Math.random() * 51)); // Генерация рандомного количества лайков от 0 до 50
    const [liked, setLiked] = useState(false); 

    const handleLikeClick = () => {
        if (!liked) {
            setLikes(likes + 1); 
            setLiked(true); 
        }
    };

    return (
        <div className="reactionBlock" onClick={handleLikeClick}>
            <span style={{cursor:'pointer'}} role="img" aria-label="like">👍</span>
            <span>{likes}</span>
        </div>
    );
}

export default ReactionBlock;
