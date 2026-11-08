// features/customer/components/CategoryTiles/CategoryTiles.jsx
import {FEATURED_CATEGORIES} from "../../../../constants/featuredCategories";

const TONES = {
    orange: {
        idle: "bg-orange-100",
        selected: "bg-orange-100 ring-2 ring-orange-400",
    },
    blue: {
        idle: "bg-blue-100",
        selected: "bg-blue-100 ring-2 ring-blue-400",
    },
};

const CategoryTiles = ({selectedCategory, onSelect}) => (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {FEATURED_CATEGORIES.map(({id, name, image, tone}) => {
            const isSelected = selectedCategory === id;

            return (
                <button
                    key={id}
                    type="button"
                    onClick={() => onSelect(isSelected ? "" : id)}
                    className={`flex min-h-36 flex-col items-center justify-center gap-3 rounded-2xl p-4 text-base font-bold shadow-[0_4px_14px_rgba(0,0,0,0.08)] md:min-h-44 md:text-xl ${
                        isSelected ? TONES[tone].selected : TONES[tone].idle
                    }`}
                >
                    <img src={image} alt="" className="h-16 w-16 md:h-20 md:w-20"/>
                    {name}
                </button>
            );
        })}
    </div>
);

export default CategoryTiles;