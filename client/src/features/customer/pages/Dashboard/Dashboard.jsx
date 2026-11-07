// features/customer/pages/Dashboard/Dashboard.jsx
import "./Dashboard.css";
import { PROVIDERS } from "../../../../data/providers";
import ProviderCard from "../../components/ProviderCard/ProviderCard";

const Dashboard = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
        {PROVIDERS.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
    </div>
  );
};

export default Dashboard;
