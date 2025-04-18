const storyLinkRoot = "/pages/story?id="

export function storyPageLink(storyId: number) {
    return storyLinkRoot + storyId
}