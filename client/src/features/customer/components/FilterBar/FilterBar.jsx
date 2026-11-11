// features/customer/components/FilterBar/FilterBar.jsx
import {CATEGORIES} from "../../../../constants/categories.js";
import Button from "../../../../components/ui/Button/Button.jsx";
import Dropdown from "../../../../components/ui/Dropdown/Dropdown.jsx";
import {CalendarDays, CircleEuro, ListSortDescending, MapPin} from "lucide-react";

const FilterBar = ({
                       selectedCategory,
                       onCategoryChange,
                       sortOrder,
                       onSortChange,
                       day,
                       onDayChange,
                       zone,
                       onZoneChange,
                       onClear,
                   }) => {

    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
            <Dropdown
                icon={ListSortDescending}
                options={CATEGORIES.map((c) => ({value: c.id, label: c.name}))}
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                placeholder="Të gjitha kategoritë"
            />

            <Dropdown
                icon={CircleEuro}
                options={[
                    {value: "", label: "Pa renditje"},
                    {value: "asc", label: "Çmimi: nga më i ulëti"},
                    {value: "dsc", label: "Çmimi: nga më i larti"}
                ]}
                value={sortOrder}
                onChange={(e) => onSortChange(e.target.value)}
                placeholder="Pa renditje"
            />

            <Dropdown
                icon={MapPin}
                options={[
                    {value: "", label: "Të gjitha zonat"},
                    {value: "Tiranë", label: "Tiranë"},
                    {value: "Durrës", label: "Durrës"},
                    {value: "Shkodër", label: "Shkodër"}
                ]}
                value={zone}
                onChange={(e) => onZoneChange(e.target.value)}
                placeholder="Të gjitha zonat"
            />

            <Dropdown
                icon={CalendarDays}
                options={[
                    {value: "", label: "Të gjitha ditët"},
                    {value: "Hën", label: "Hën"},
                    {value: "Mar", label: "Mar"},
                    {value: "Mër", label: "Mër"},
                    {value: "Enj", label: "Enj"},
                    {value: "Pre", label: "Pre"},
                    {value: "Sht", label: "Sht"},
                    {value: "Die", label: "Die"}
                ]}
                value={day}
                onChange={(e) => onDayChange(e.target.value)}
                placeholder="Të gjitha zonat"
            />

            <Button onClick={onClear}>Pastro filtrat</Button>
        </div>
    )
}

export default FilterBar