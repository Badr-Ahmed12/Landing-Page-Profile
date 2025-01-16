interface ButtonProps {
    children: React.ReactNode;
    className?: string;
}


export default function Button({ children, className = "" }: ButtonProps) {
    return (
        <button
            className={`bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300 ${className}`}
        >
            {children}
        </button>
    );
}

