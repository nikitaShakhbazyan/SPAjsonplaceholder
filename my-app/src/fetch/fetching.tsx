import { Fetching } from "../types";
export const fetching = async () => {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data: Fetching[] = await req.json();

        const postsWithImages = data.map(post => ({
            ...post,
            imageUrl: 'https://random.imagecdn.app/500/150'
        }));

        return postsWithImages;
    } catch(err) {
        console.error("There is an error", err);
        throw err; 
    }
}
