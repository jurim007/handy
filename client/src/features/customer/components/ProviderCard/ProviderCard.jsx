// features/customer/components/ProviderCard/ProviderCard.jsx
import {Star} from "lucide-react";
import {CATEGORIES} from "../../../../constants/categories";

const ProviderCard = ({provider}) => {
    const {name, city, price, rating, photo} = provider;

    const categoryInfo = CATEGORIES.find((c) => c.id === provider.category);
    const Icon = categoryInfo.icon;

    return (
        <div className="flex gap-4 bg-white rounded-2xl p-4">
            <img src={photo} alt={name} className="h-24 w-24 shrink-0 rounded-xl object-cover"/>
            <div className="flex-1 min-w-0">
                <h3>{name}</h3>

                <div className="flex items-center gap-2">
                    <Icon size={18}/>
                    <span>{categoryInfo.name}</span>
                </div>

                <p>{city}</p>

                <div className="flex items-center gap-2">
                    <Star size={16}/>
                    <span>{rating}</span>
                </div>

                <p className="font-bold text-orange-400">{price} L/orë</p>
            </div>
        </div>
    );
};

export default ProviderCard;
