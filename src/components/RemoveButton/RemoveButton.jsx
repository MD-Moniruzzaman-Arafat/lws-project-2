
export default function RemoveButton({ onHandleClick }) {
    return (
        <>
            <button onClick={onHandleClick}
                className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd" />
                </svg>
            </button>
        </>
    )
}
