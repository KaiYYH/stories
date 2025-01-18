import { useEffect } from "react";

export const Modal = (
    {
        isOpen, onClose, children
    }:{
        isOpen: boolean,
        onClose: () => void,
        children: React.ReactNode
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
        <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
            <div className="bg-foreground text-background p-5 rounded-md shadow.lg max-w-md md:ax-w-md mx-auto transition-transform duration-300 transform-gpu">
                <button onClick={onClose} className="float-right hover:text-[#383838] dark:hover:text-[#7a7a7a]">X</button>
                <div className="mt-8">{children}</div>
            </div>
        </div>
    </>
    );
};