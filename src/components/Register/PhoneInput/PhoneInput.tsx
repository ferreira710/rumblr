"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";

interface CountryCode {
  code: string;
  country: string;
  flag: string;
  mask: string;
}

const COUNTRY_CODES: CountryCode[] = [
  { code: "+55", country: "BR", flag: "🇧🇷", mask: "(00) 00000-0000" },
  { code: "+1", country: "US", flag: "🇺🇸", mask: "(000) 000-0000" },
];

interface PhoneInputProps {
  value?: string;
  onChange?: (phone: string, countryCode: string) => void;
  error?: string;
  className?: string;
}

export function PhoneInput({
  value = "",
  onChange,
  error,
  className,
}: PhoneInputProps) {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(
    COUNTRY_CODES[0],
  );
  const [phone, setPhone] = useState(value);

  const formatPhoneNumber = (input: string, mask: string) => {
    const numbers = input.replace(/\D/g, "");
    let formatted = "";
    let numberIndex = 0;

    for (let i = 0; i < mask.length && numberIndex < numbers.length; i++) {
      if (mask[i] === "0") {
        formatted += numbers[numberIndex];
        numberIndex++;
      } else {
        formatted += mask[i];
      }
    }

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value, selectedCountry.mask);
    setPhone(formatted);
    onChange?.(formatted, selectedCountry.code);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country =
      COUNTRY_CODES.find((c) => c.code === e.target.value) || COUNTRY_CODES[0];
    setSelectedCountry(country);
    const reformatted = formatPhoneNumber(
      phone.replace(/\D/g, ""),
      country.mask,
    );
    setPhone(reformatted);
    onChange?.(reformatted, country.code);
  };

  return (
    <div className={cn("space-y-2", className)}>
      <label
        htmlFor="phone-input"
        className="block text-sm font-medium text-white"
      >
        Número de telefone
      </label>

      <div className="flex gap-2">
        <div className="relative">
          <select
            value={selectedCountry.code}
            onChange={handleCountryChange}
            className={cn(
              "appearance-none bg-transparent border border-white rounded-full h-12 pl-4 pr-8 text-white",
              "focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50",
              "hover:border-gray-300 transition-colors",
              error && "border-red-500",
            )}
            aria-label="Código do país"
          >
            {COUNTRY_CODES.map((country) => (
              <option
                key={country.code}
                value={country.code}
                className="bg-stone-900 text-white"
              >
                {country.flag} {country.code}
              </option>
            ))}
          </select>

          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Flecha para baixo</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="flex-1 relative">
          <input
            id="phone-input"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder={selectedCountry.mask}
            className={cn(
              "w-full bg-transparent border border-white rounded-full h-12 px-4 text-white placeholder-gray-400",
              "focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50",
              "hover:border-gray-300 transition-colors",
              error && "border-red-500",
            )}
            aria-label="Número de telefone"
            aria-describedby={error ? "phone-error" : undefined}
          />
        </div>
      </div>

      {error && (
        <p id="phone-error" className="text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
