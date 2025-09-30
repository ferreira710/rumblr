"use client";

import { useState } from "react";
import { Button } from "../Button";
import { PhoneInput } from "./PhoneInput";

export function Register() {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+55");
  const [error, setError] = useState("");

  const validatePhone = (phoneNumber: string, code: string) => {
    const numbersOnly = phoneNumber.replace(/\D/g, "");

    if (code === "+55" && numbersOnly.length !== 11) {
      return "Número deve ter 11 dígitos";
    }
    if (code === "+1" && numbersOnly.length !== 10) {
      return "Número deve ter 10 dígitos";
    }

    return "";
  };

  const handlePhoneChange = (newPhone: string, newCountryCode: string) => {
    setPhone(newPhone);
    setCountryCode(newCountryCode);

    const validationError = validatePhone(newPhone, newCountryCode);
    setError(validationError);
  };

  const handleSubmit = () => {
    const validationError = validatePhone(phone, countryCode);

    if (validationError) {
      setError(validationError);
      return;
    }

    console.log("Phone:", phone, "Country Code:", countryCode);
    // Implementar lógica de cadastro
  };

  const isValid = phone.length > 0 && !error;

  return (
    <div className="flex w-full flex-col gap-6 px-8">
      <h1 className="text-4xl font-semibold">Meu número é...</h1>

      <PhoneInput value={phone} onChange={handlePhoneChange} error={error} />

      <div className="space-y-2">
        <p className="text-gray-400 text-sm">
          Enviaremos um texto com um código de verificação. Podem ser aplicadas
          taxas de mensagens e dados. Saiba o que acontece quando seu número
          muda.
        </p>
      </div>

      <div className="flex w-full max-w-md flex-col gap-4 mt-8">
        <Button
          variant="outline"
          onClick={handleSubmit}
          disabled={!isValid}
          className={!isValid ? "opacity-50 cursor-not-allowed" : ""}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
}
