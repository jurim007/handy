// features/customer/pages/Dashboard/Dashboard.jsx
import "./Dashboard.css";
import {PROVIDERS} from "../../../../data/providers";
import ProviderCard from "../../components/ProviderCard/ProviderCard";
import CategoryTiles from "../../components/CategoryTiles/CategoryTiles";
import {useState} from "react";
import {CATEGORIES} from "../../../../constants/categories.js";
import Button from "../../../../components/ui/Button/Button.jsx";

const Dashboard = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOrder, setSortOrder] = useState("");
    const [day, setDay] = useState("");
    const [zone, setZone] = useState("");

    const clearFilters = () => {
        setSelectedCategory("");
        setSortOrder("");
        setDay("");
        setZone("");
    };

    const filteredProviders = PROVIDERS.filter(
        (p) =>
            (selectedCategory === "" || p.category === selectedCategory) &&
            (zone === "" || p.serviceArea.includes(zone)) &&
            (day === "" || p.workdays.includes(day))
    );

    if (sortOrder === "asc") filteredProviders.sort((a, b) => a.price - b.price);
    if (sortOrder === "desc") filteredProviders.sort((a, b) => b.price - a.price);

    return (
        <div className="max-w-full py-7 px-15">
            <h1 className="text-6xl text-center font-bold">Përshëndetje, Juri</h1>
            <p className="text-2xl text-center text-gray-500">Çfarë shërbimi ju duhet sot?</p>

            <CategoryTiles
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
            />

            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">Të gjitha kategoritë</option>
                {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>

            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">Pa renditje</option>
                <option value="asc">Çmimi: nga më i ulëti</option>
                <option value="desc">Çmimi: nga më i larti</option>
            </select>

            <select value={zone} onChange={(e) => setZone(e.target.value)}>
                <option value="">Të gjitha zonat</option>
                <option value="Tiranë">Tiranë</option>
                <option value="Durrës">Durrës</option>
                <option value="Shkodër">Shkodër</option>
            </select>

            <select value={day} onChange={(e) => setDay(e.target.value)}>
                <option value="">Të gjitha ditët</option>
                <option value="Hën">Hën</option>
                <option value="Mar">Mar</option>
                <option value="Mër">Mër</option>
                <option value="Enj">Enj</option>
                <option value="Pre">Pre</option>
                <option value="Sht">Sht</option>
                <option value="Die">Die</option>
            </select>

            <Button variant="outline" onClick={clearFilters}>Pastro filtrat</Button>

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
