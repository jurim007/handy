// features/customer/components/ProviderCard/ProviderCard.jsx
import {CATEGORIES} from "../../../../constants/categories";
import {ArrowRight, MapPin} from "lucide-react";
import Button from "../../../../components/ui/Button/Button.jsx";

const ProviderCard = ({provider}) => {
    const {name, city, price, photo} = provider;

    const categoryInfo = CATEGORIES.find((c) => c.id === provider.category);

    return (
        <div className="flex gap-4 bg-white rounded-2xl p-4">
            <img src={photo} alt={name} className="h-24 w-24 shrink-0 rounded-xl object-cover"/>
            <div className="flex-1 min-w-0">
                <h3>{name}</h3>

                <span className="text-base text-gray-500">{categoryInfo.name}</span>

                <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin size={16}/>
                    <p>{city}</p>
                </div>

                <p className="font-bold text-orange-400">{price} L/orë</p>
                <Button variant="soft" className="flex items-center justify-center gap-2 mt-2">
                    Shiko Profilin
                    <ArrowRight size={20}/>
                </Button>
            </div>
        </div>
    );
};

export default ProviderCard;
