// Details.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types';
import ReactionBlock from '../components/ReactionBlock';
import './details.css'

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
        <div className='main-div'>
            {post && (
                <>
                    <ReactionBlock likes={post.likes} dislikes={post.dislikes} />
                    {photoUrl && <img className='fetched-image' src={photoUrl} alt="Post" />}
                    <h2>ID: {post.id}</h2>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                </>
            )}
        </div>
    );
}

export default Details;
