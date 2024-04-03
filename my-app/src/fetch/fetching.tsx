export const fetching = async () => {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const data = await req.json();
        return data;
    } catch(err) {
        console.error("There is an error", err);
        throw err; 
    }
}
