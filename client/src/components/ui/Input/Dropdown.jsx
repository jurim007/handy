import "./Dropdown.css";
import Label from "../Label/Label";

function Dropdown({ label, icon: Icon, options, value, onChange, placeholder = "Zgjidh" }) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className="relative flex items-center">
        {Icon && <Icon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />}
        <select
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-full px-3 py-2 pl-10 text-sm focus:outline-none focus:border-orange-400"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
