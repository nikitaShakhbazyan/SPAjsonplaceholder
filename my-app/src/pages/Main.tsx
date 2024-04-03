import React, { useEffect, useState } from 'react';
import './main.css';
import { fetching } from '../fetch/fetching';
import { Fetching } from '../types';
import ReactionBlock from '../components/ReactionBlock';
import { Link } from 'react-router-dom';

const Main = () => {
    const [data, setData] = useState<Fetching[]>([]);
    const [filter, setFilter] = useState<string>('');

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

    const filteredData = data.filter(post =>
        post.title.toLowerCase().includes(filter.toLowerCase())
    );

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return (
        <div className='mainDiv'>
            <input
                className='search-input'
                type="text"
                placeholder="Фильтр по заголовку"
                value={filter}
                onChange={handleFilterChange}
            />
            
            {filteredData.slice(0, 1).map(post => (
                <div key={post.id} className="topPost">
                    <p>UserID: {post.userId}</p>
                    <p>ID: {post.id}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                    <img className='fetch-img main-img' src={post.imageUrl} alt="Post " />
                    <Link to={`/details/${post.id}`}>Details</Link>
                    <ReactionBlock/>
                    <button className='read-more-btn'>Read More</button>
                </div>
            ))}
            <div className="gridContainer">
                {filteredData.slice(1, 5).map(post => (
                    <div key={post.id} className="gridPost">
                        <p>UserID: {post.userId}</p>
                        <p>ID: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Body: {post.body}</p>
                        <img className='fetch-img' src={post.imageUrl} alt="Post " />
                        <ReactionBlock/>
                         <Link to={`/details/${post.id}`}>Details</Link>
                        <button className='read-more-btn'>Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;
