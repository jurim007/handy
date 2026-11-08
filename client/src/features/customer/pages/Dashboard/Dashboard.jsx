// features/customer/pages/Dashboard/Dashboard.jsx
import "./Dashboard.css";
import {PROVIDERS} from "../../../../data/providers";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import CategoryTiles from "../../components/CategoryTiles/CategoryTiles";
import {useState} from "react";

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const [zone, setZone] = useState("");

    const filteredProviders = PROVIDERS.filter(
        (p) => selectedCategory === "" || p.category === selectedCategory
    );

    return (
        <div className="max-w-full py-7 px-15">
            <h1 className="text-6xl text-center font-bold">Përshëndetje, Juri</h1>
            <p className="text-2xl text-center text-gray-500">Çfarë shërbimi ju duhet sot?</p>

            <CategoryTiles
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <div>
                <h2 className="font-bold text-3xl">Punëtorë pranë jush</h2>
                {filteredProviders.length === 0 ? (
                    <p>Nuk u gjet asnjë punëtor në këtë kategori.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {filteredProviders.map((provider) => (
                            <ProviderCard key={provider.id} provider={provider}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
