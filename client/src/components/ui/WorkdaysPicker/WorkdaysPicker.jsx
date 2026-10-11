// components/ui/WorkdaysPicker/WorkdaysPicker.jsx
import "./WorkdaysPicker.css";
import Label from "../Label/Label";

const DAYS = ["Hën", "Mar", "Mër", "Enj", "Pre", "Sht", "Die"];

function WorkdaysPicker({ label, value, onChange }) {
  const toggleDay = (day) => {
    if (value.includes(day)) {
      onChange(value.filter((d) => d !== day));
    } else {
      onChange([...value, day]);
    }
  };

  return (
    <div>
      {label && <Label>{label}</Label>}
      <div className="flex flex-wrap gap-2">
        {DAYS.map((day) => (
          <button
            key={day}
            type="button"
            onClick={() => toggleDay(day)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              value.includes(day)
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WorkdaysPicker;
