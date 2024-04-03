// Details.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types';
import ReactionBlock from '../components/ReactionBlock';

const Details: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const [post, setPost] = useState<Post | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string>('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data: Post) => {
                setPost(data);
                fetch('https://random.imagecdn.app/500/150')
                    .then((res) => res.blob())
                    .then((blob) => {
                        const imageUrl = URL.createObjectURL(blob);
                        setPhotoUrl(imageUrl);
                    });
            });
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    {photoUrl && <img src={photoUrl} alt="Post" />}
                    <h2>ID: {post.id}</h2>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                    <ReactionBlock likes={post.likes} dislikes={post.dislikes} />
                </>
            )}
        </div>
    );
}

export default Details;
