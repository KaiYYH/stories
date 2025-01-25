import { Modal } from "./Modal";

interface Props {
    isModalOpen: boolean,
    onClose: () => void,
    onSubmit: (name: string, description: string) => void,
}

export default function CreateStoryModal(props: Props) {
    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault()
        const form = event.currentTarget
        const formElements = form.elements as typeof form.elements & {
            nameInput: {value: string}
            descriptionInput: {value: string}
        }

        props.onSubmit(formElements.nameInput.value, formElements.descriptionInput.value)
    }

    return(
        <Modal
        isOpen={props.isModalOpen}
        onClose={props.onClose}
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
    )
}