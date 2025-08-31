export type Post = {
    userId: number; // 45 character max
    authorName: string;
    content: string; // 10,000 character max
    date: Date;
    postId: number;
    storyId: number;
}