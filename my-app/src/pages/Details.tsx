import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../types';

const Details = () => {
    const { id } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [photoUrl, setPhotoUrl] = useState<string>('');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data: Post) => {
                setPost(data);
                fetch('https://random.imagecdn.app/500/150')
                    .then((res) => res.blob()) // Получаем данные в виде объекта Blob
                    .then((blob) => {
                        const imageUrl = URL.createObjectURL(blob); // Создаем URL из объекта Blob
                        setPhotoUrl(imageUrl);
                    });
            });
    }, [id]);

    return (
        <div>
            {post && (
                <>
                    {photoUrl && <img src={photoUrl} alt="Post" />} {/* Отображаем фото */}
                    <h2>ID: {post.id}</h2>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                </>
            )}
        </div>
    );
}

export default Details;
