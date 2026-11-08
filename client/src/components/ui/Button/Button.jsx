// components/ui/Button/Button.jsx
import "./Button.css";

function Button({
                    children,
                    onClick,
                    type = "button",
                    variant = "primary",
                    disabled = false,
                    className = "",
                }) {
    const base = "px-4 py-2 rounded-lg transition-colors";

    const variants = {
        primary: "font-medium bg-orange-500 text-white hover:bg-orange-600",
        soft: "font-bold bg-orange-400/15 text-orange-400 font-bold hover:bg-orange-400/25",
        outline:
            "font-medium bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-50",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
