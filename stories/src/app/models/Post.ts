export type Post = {
    postId: number;
    content: string; // 10,000 character max
    userId: number; 
    date: Date;
    storyId: number;
}