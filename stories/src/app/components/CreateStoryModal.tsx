import { useState } from "react";
import { Modal } from "./Modal";

export default function CreateStoryModal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleSubmit() {
        console.log("Story Created!")
    
        let nameOfStory = document.getElementById("Name")
    
        console.log(nameOfStory)
    
        if (nameOfStory) {
          console.log(nameOfStory.innerHTML)
        }
    
        /* // POST request using fetch()
        fetch("https://localhost:7009/api/Stories", {
          method: "POST",
          
          // Adding body or contents to send
          body: JSON.stringify({
              title: "foo",
              body: "bar",
              userId: 1
          }),
        })
        // Converting to JSON
        .then(response => response.json())
    
        // Displaying results to console
        .then(json => console.log(json)); */

    return(
        <Modal
        isOpen={isModalOpen}
        onClose={() => {
            setIsModalOpen(false);
        }}
        >
    <div>
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-[25%_72%] gap-3">
                <div className=""><label>Name: </label></div>
                <div className=""><input type="text" /* maxlength="45" */ id="nameInput" required className="float-right bg-[#ccc] rounded-md w-64 p-1" /></div>
                <div className=""><label>Description: </label></div>
                <div className=""><textarea /* maxlength="200" */ id="descriptionInput" className="bg-[#ccc] rounded-md w-64 float-right p-1" /></div>
                <div className=""></div>
                <div className=""><input type="submit" value="Submit" className="cursor-pointer float-right text-foreground hover:text-[#383838] dark:hover:text-[#7a7a7a] bg-background rounded-md p-2"/></div>
            </div>
        </form>
    </div>
    </Modal>
    )}
}
