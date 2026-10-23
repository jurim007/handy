// features/auth/pages/AuthPage/AuthPage.jsx
import "./AuthPage.css";

import HandyLogo from "../../../../assets/logo/handy-logo.png";

import { useState } from "react";

import PageBackground from "../../../../components/layout/PageBackground/PageBackground";
import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";
import Label from "../../../../components/ui/Label/Label";
import Dropdown from "../../../../components/ui/Input/Dropdown";
import WorkdaysPicker from "../../../../components/ui/WorkdaysPicker/WorkdaysPicker";

import { HOURS } from "../../../../constants/hours";
import { CATEGORIES } from "../../../../constants/categories";

import {
  Phone,
  Lock,
  User,
  MapPin,
  ListSortDescending,
  CircleEuro,
  Clock,
  UserRound,
  ArrowRight,
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

  const roleName = role === "customer" ? "klient" : "ofrues";

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
      data = { phone, password, name, address };
    } else {
      data = {
        phone,
        password,
        name,
        category,
        price,
        workdays,
        startTime,
        endTime,
      };
    }

    // 3. for now, just look at it
    console.log(data);
  };

  return (
    <div className="auth-page flex flex-col items-center justify-center">
      <PageBackground />

      <div className="relative z-10 w-full md:max-w-xl lg:max-w-2xl px-4 py-6 flex flex-col items-center gap-3">
        <img
          className="h-28 md:h-35 lg:h-50"
          src={HandyLogo}
          alt="Handy Logo"
        />

        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-2xl shadow-[0_0_20px_rgba(255,122,26,0.15)] p-4 md:p-6 flex flex-col gap-4"
        >
          <div className="flex w-full rounded-full bg-orange-500/10">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                mode === "login" ? "bg-orange-500 text-white" : "text-gray-700"
              }`}
            >
              Hyr
            </button>

            <button
              type="button"
              onClick={() => setMode("register")}
              className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors ${
                mode === "register"
                  ? "bg-orange-500 text-white"
                  : "text-gray-700"
              }`}
            >
              Regjistrohu
            </button>
          </div>

          <div className="flex items-center gap-2 w-fit mx-auto rounded-full px-3 py-2 text-orange-400 bg-orange-400/10">
            <UserRound size="20" color="#FB923C" />
            <p className="text-sm font-medium">
              {role === "customer" ? "Klient" : "Ofrues shërbimi"}
            </p>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-extrabold">
              {mode === "login"
                ? "Mirë se vini"
                : `Krijo llogari si ${roleName}`}
            </h1>
            <p className="text-base md:text-md lg:text-xl text-gray-500">
              {mode === "login"
                ? "Hyni për të vazhduar"
                : `Plotëso të dhënat për të vazhduar`}
            </p>
          </div>

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
                    options={CATEGORIES.map((c) => c.name)}
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

          <Button type="submit" className="relative">
            {mode === "login" ? "Hyr" : "Regjistrohu"}
            <ArrowRight
              size={20}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
