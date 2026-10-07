import "./Input.css";
import Label from "../Label/Label";

function Input({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className="relative ...">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-full px-3 py-2 pl-10 text-sm focus:outline-none focus:border-orange-400"
        />
      </div>
    </div>
  );
}

export default Input;
