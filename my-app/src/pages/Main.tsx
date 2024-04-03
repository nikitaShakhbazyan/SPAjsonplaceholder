import React, { useEffect, useState } from 'react';
import './main.css';
import { fetching } from '../fetch/fetching';
import { Fetching } from '../types';
import ReactionBlock from '../components/ReactionBlock';

const Main = () => {
    const [data, setData] = useState<Fetching[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetching();
                setData(result);
            } catch (err) {
                console.error("There is an error", err);
            }
        };

        fetchData();
    }, []);

    

    return (
        <div className='mainDiv'>
            {data.slice(0, 1).map(post => (
                <div key={post.id} className="topPost">
                    <p>UserID: {post.userId}</p>
                    <p>ID: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <img className='fetch-img main-img' src={post.imageUrl} alt="Post " />
                    <ReactionBlock/>
                </div>
            ))}
            <div className="gridContainer">
                {data.slice(1, 5).map(post => (
                    <div key={post.id} className="gridPost">
                        <p>UserID: {post.userId}</p>
                        <p>ID: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                        <img className='fetch-img' src={post.imageUrl} alt="Post " />
                        <ReactionBlock/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
