// features/customer/pages/Dashboard/Dashboard.jsx
import "./Dashboard.css";
import {PROVIDERS} from "../../../../data/providers";
import ProviderCard from "../../components/ProviderCard/ProviderCard";

const Dashboard = () => {
    return (
        <div className="max-w-full py-7 px-15">
            <h1 className="text-6xl text-center font-bold">Përshëndetje, Juri</h1>
            <p className="text-2xl text-center text-gray-500">Çfarë shërbimi ju duhet sot?</p>
            <div>
                <h2 className="font-bold text-3xl">Punëtorë pranë jush</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {PROVIDERS.map((provider) => (
                        <ProviderCard key={provider.id} provider={provider}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
