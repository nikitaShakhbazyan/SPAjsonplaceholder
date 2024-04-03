export interface Fetching {
    userId: number,
    id: number,
    title: string,
    body: string,
    imageUrl: string,
    likes: number,
    dislikes: number
}

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    likes: number;
    dislikes: number;
}
