import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const DetailsComp = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} to={`/details/${post.id}`}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DetailsComp;
