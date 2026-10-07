import "./AuthPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Input from "../../../../components/ui/Input/Input";
import Input from "../../../../components/ui/Input/Dropdown";
import {
  Phone,
  Lock,
  User,
  MapPin,
  ListSortDescending,
  CircleEuro,
} from "lucide-react";
import Dropdown from "../../../../components/ui/Input/Dropdown";

const AuthPage = ({ role }) => {
  const [mode, setMode] = useState("login");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <button onClick={() => setMode("login")}>Hyr</button>
      <button onClick={() => setMode("register")}>Regjistrohu</button>

      {/* Default for both modes */}
      <Input
        label="Numri i telefonit"
        icon={Phone}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="P.sh. 069 123 4567"
      />

      <Input
        label="Fjalëkalimi"
        icon={Lock}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="P.sh. Fjalëkalimi123"
      />

      {/* Devide into mode and roles */}
      {mode === "register" && (
        <>
          <Input
            label="Emri i plotë"
            icon={User}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="P.sh. Arben Krasniqi"
          />

          {role === "customer" && (
            <Input
              label="Adresa"
              icon={MapPin}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="P.sh. Rruga Qemal Stafa, Tiranë"
            />
          )}

          {role === "provider" && (
            <>
              <Dropdown
                label="Kategoria"
                icon={ListSortDescending}
                options={["Hidraulik", "Elektrik", "Pastrim", "Ndërtim"]}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Zgjidh kategorinë"
              />
              <Input
                label="Çmimi për orë"
                icon={CircleEuro}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="P.sh. 10 €"
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AuthPage;
