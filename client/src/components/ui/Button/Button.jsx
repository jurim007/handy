// components/ui/Button/Button.jsx
import "./Button.css";

function Button({ children, onClick, type = "button", variant = "primary", disabled = false }) {
  const base = "px-4 py-2 rounded-lg font-medium transition-colors";

  const variants = {
    primary: "bg-orange-500 text-white hover:bg-orange-600",
    outline: "bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;