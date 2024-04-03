import React, { useState } from 'react';

interface ReactionBlockProps {
    likes: number;
    dislikes: number;
}

const ReactionBlock: React.FC<ReactionBlockProps> = ({ likes, dislikes }) => {
    const [liked, setLiked] = useState<boolean>(false); 
    const [likesCount, setLikesCount] = useState<number>(Math.floor(Math.random() * 51)); 
    const [disliked, setDisliked] = useState<boolean>(false); 

    const handleLikeClick = () => {
        if (!liked && !disliked) {
            setLiked(true); 
            setLikesCount((prev) => prev + 1)
        }
    };

    const handleDislikeClick = () => {
        if (!disliked && !liked) {
            setDisliked(true); 
            setLikesCount((prev) => prev - 1)
        }
    };

    return (
        <div className="reactionBlock">
            <span style={{ cursor: 'pointer' }} role="img" aria-label="like" onClick={handleLikeClick}>👍 </span>
            <span>{likesCount}</span>
            <span style={{ marginLeft: '10px', cursor: 'pointer' }} role="img" aria-label="dislike" onClick={handleDislikeClick}>👎</span>
            <span>{dislikes}</span>
        </div>
    );
}

export default ReactionBlock;
