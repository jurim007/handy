// features/auth/pages/AuthPage/AuthPage.jsx
import "./AuthPage.css";

import { useState } from "react";

import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";
import Label from "../../../../components/ui/Label/Label";
import Dropdown from "../../../../components/ui/Input/Dropdown";
import WorkdaysPicker from "../../../../components/ui/WorkdaysPicker/WorkdaysPicker";

import { HOURS } from "../../../../constants/hours";

import {
  Phone,
  Lock,
  User,
  MapPin,
  ListSortDescending,
  CircleEuro,
  Clock,
} from "lucide-react";

const AuthPage = ({ role }) => {
  const [mode, setMode] = useState("login");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [workdays, setWorkdays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. workdays check (the browser can't check chips)
    if (mode === "register" && role === "provider" && workdays.length === 0) {
      alert("Zgjidh të paktën një ditë pune");
      return;
    }

    // 2. build `data` for the current case
    let data;
    if (mode === "login") {
      data = { phone, password };
    } else if (role === "customer") {
      data = {phone, password, name, address}
    } else {
      data = {phone, password, name, category, price, workdays, startTime, endTime}
    }

    // 3. for now, just look at it
    console.log(data);
  };

  return (
    <div>
      <Button
        type="button"
        variant={mode === "login" ? "primary" : "outline"}
        onClick={() => setMode("login")}
      >
        Hyr
      </Button>

      <Button
        type="button"
        variant={mode === "register" ? "primary" : "outline"}
        onClick={() => setMode("register")}
      >
        Regjistrohu
      </Button>

      <form onSubmit={handleSubmit}>
        {/* Default for both modes */}
        <Input
          label="Numri i telefonit"
          icon={Phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="P.sh. 069 123 4567"
          required
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
              required
            />

            {role === "customer" && (
              <Input
                label="Adresa"
                icon={MapPin}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="P.sh. Rruga Qemal Stafa, Tiranë"
                required
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
                  required
                />

                <Input
                  label="Çmimi për orë"
                  type="number"
                  icon={CircleEuro}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="P.sh. 10 €"
                  required
                />

                <WorkdaysPicker
                  label="Ditët e punës"
                  value={workdays}
                  onChange={setWorkdays}
                />

                <div>
                  <Label>Orari</Label>
                  <div className="flex items-center gap-2">
                    <Dropdown
                      icon={Clock}
                      options={HOURS}
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      placeholder="Nga 07:00"
                      required
                    />
                    <span>–</span>
                    <Dropdown
                      icon={Clock}
                      options={HOURS}
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      placeholder="Deri 17:00"
                      required
                    />
                  </div>
                </div>
              </>
            )}
          </>
        )}

        <Input
          label="Fjalëkalimi"
          type="password"
          icon={Lock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="P.sh. Fjalëkalimi123"
          required
        />

        <Button type="submit">
          {mode === "login" ? "Hyr" : "Regjistrohu"}
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
