export type Story = {
  modalTitle: string;
  storyId: number;
  name: string; // 45 character max
  description: string; // 200 character max
  postCount: number;
  lastPost?: Date;
  userId: number;
}