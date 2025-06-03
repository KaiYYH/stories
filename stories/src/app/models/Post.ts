export type Post = {
    author: string; // 45 character max
    content: string; // 10,000 character max
    date: Date;
    postId: number;
    storyId: number;
}