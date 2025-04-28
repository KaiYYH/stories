import { useEffect } from "react";

export const Modal = (
    {
        isOpen, onClose, children, modalTitle
    }:{
        isOpen: boolean,
        onClose: () => void,
        children: React.ReactNode
        modalTitle: string,
    }
) => {

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
    }, [onClose]);

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <div className="bg-background text-foreground p-5 rounded-md border border-foreground shadow.lg max-w-md md:ax-w-md mx-auto transition-transform duration-300 transform-gpu">
                <div>
                    <button onClick={onClose} className="float-right self-start hover:text-[#383838] dark:hover:text-[#7a7a7a]">X</button>
                    <h1 className="font-bold text-lg">{modalTitle}</h1>
                </div>
                <div className="mt-6">{children}</div>
            </div>
        </div>
    );
};