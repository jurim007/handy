// components/ui/Dropdown/Dropdown.jsx
import "./Dropdown.css";
import Label from "../Label/Label.jsx";

function Dropdown({
                      label,
                      icon: Icon,
                      options,
                      value,
                      onChange,
                      placeholder = "Zgjidh",
                      required,
                  }) {
    const items = options.map((o) =>
        typeof o === "string" ? {value: o, label: o} : o
    );

    return (
        <div>
            {label && <Label>{label}</Label>}
            <div className="relative flex items-center">
                {Icon && (
                    <Icon
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-black"
                    />
                )}
                <select
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={`w-full border border-gray-300 rounded-full px-3 py-2 pl-10 text-sm focus:outline-none focus:border-orange-400 ${
                        value === "" ? "text-gray-400" : "text-gray-900"
                    }`}
                >
                    <option value="">{placeholder}</option>
                    {items.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default Dropdown;
