import StoryBox from "./StoryBox";

export default function StoryGrid() {
    const storyNames = [ // temporary fake database
        {
            name: 'Title 1',
            description: 'Description 1',
            postCount: 6004,
            lastPost: new Date("11/13/24"),
        }, 
        {
            name: 'Title 2',
            description: 'Description 2',
            postCount: 100,
            lastPost: new Date("09/28/22"),
        }, 
        {
            name: 'Title 3',
            description: 'Description 3',
            postCount: 2,
            lastPost: new Date("03/06/23"),
        },
        {
            name: 'Title 4',
            description: 'Description 4',
            postCount: 15,
            lastPost: new Date("06/30/16"),
        },
        {
            name: 'Title 5',
            description: 'Description 5',
            postCount: 24,
            lastPost: new Date("11/29/2024"),
        }
    ];

    return(
        <div className="grid grid-cols-4 gap-4">
            {storyNames.map((item) => (
                <StoryBox 
                    storyName={item.name}
                    storyDescription={item.description}
                    postCount={item.postCount} 
                    lastPost={item.lastPost}                
                />
            ))}
        </div>
    )
}