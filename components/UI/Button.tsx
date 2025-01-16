import ButtonProps from "../types/index.d.ts";

export default function Button({
    className = "",
    type = "button",
    onClick,
    disabled = false,
    name,
}: ButtonProps) {
    return (
        <button
            type={type}
            className={`bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition duration-300 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {name}
        </button>
    );
}


