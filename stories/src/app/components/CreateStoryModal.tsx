import { Modal } from "./Modal";

interface Props {
    isModalOpen: boolean,
    onClose: () => void,
    onSubmit: (name: string, description: string) => void,
    modalTitle: string,
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
            modalTitle={props.modalTitle}
        >
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-[32%_66%] gap-2">
                        <div className="grid grid-rows-2">
                            <div><label>Name: </label></div>
                            <div className="text-xs">max characters: 45</div>
                        </div>
                        <div><input type="text" maxLength={45} id="nameInput" required className="float-right bg-gray-200 rounded-md w-64 p-1" /></div>
                        <div className="grid grid-rows-2">
                            <div><label>Description: </label></div>
                            <div className="text-xs">max characters: 200</div>
                        </div>
                        <div className=""><textarea maxLength={200} id="descriptionInput" className="bg-gray-200 rounded-md w-64 float-right p-1" /></div>
                        <div className=""></div>
                        <div className=""><input type="submit" value="Submit" className="float-right p-3 rounded-full border border-solid border-transparent transition-colors bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"/></div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}