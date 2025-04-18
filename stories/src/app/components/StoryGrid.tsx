import { Story } from "../models/Story";
import StoryBox from "./StoryBox";

interface Props {
    stories: Story[]
}

export default function StoryGrid(props: Props) {
    return(
        <div className="grid grid-cols-4 gap-4">
            {props.stories.map((item) => (
                <StoryBox 
                    storyId={item.storyId}
                    name={item.name}
                    description={item.description}
                    postCount={item.postCount} 
                    lastPost={item.lastPost ? new Date(item.lastPost) : undefined}                
                />
            ))}
        </div>
    )
}
