import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import Image from "next/image";
import { PageFieldsFragment } from "@/graphql/generated/graphql";
import { useSearchParams } from "next/navigation";
import {
  faEye,
  faEyeSlash,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

type pagePasswordType = PageFieldsFragment["pagePassword"];

interface PagePasswordProps {
  accessPassword?: pagePasswordType;
  logo: string;
}

export default function PagePassword({
  accessPassword,
  logo,
}: PagePasswordProps) {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);

  const passwordParam = useSearchParams();
  const linkPassword = passwordParam?.get("password");

  useEffect(() => {
    if (linkPassword === accessPassword) {
      setIsAuthorized(true);
    }
  }, [linkPassword, accessPassword]);

  const handlePasswordSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password !== accessPassword) {
      setIsAuthorized(false);
      setDisplayError(true);
    }
    if (password === accessPassword) {
      setIsAuthorized(true);
      setDisplayError(false);
    }
  };
  if (isAuthorized === true) return null;
  return (
    <div className="h-[100vh] flex items-center justify-center z-[1000] fixed inset-0 w-full bg-bg">
      <form
        onSubmit={handlePasswordSubmit}
        className="form flex flex-col relative max-w-xs w-full mx-auto px-4"
        autoComplete="off"
      >
        {displayError && (
          <p className="text-xs tracking-wider bg-[red] rounded-lg max-w-max opacity-80 py-2 px-4 backdrop-blur-md mb-4 font-semibold mx-auto gap-x-2 flex flex-row items-center justify-center fixed bottom-20 inset-x-0 uppercase">
            <FontAwesomeIcon
              icon={faExclamationTriangle as IconProp}
              className="fa-fw h-4 w-4 flex aspect-1"
            />
            <span>Wrong Password</span>
          </p>
        )}
        {logo && (
          <Image
            src={logo}
            sizes="100%"
            alt="password required"
            width={0}
            height={0}
            className="w-24 h-16 object-contain mx-auto block"
          ></Image>
        )}
        <label
          className="font-bold block mb-0 mt-6 text-text-color uppercase text-xs tracking-wide"
          htmlFor="password"
        >
          Password:
        </label>
        <div className="relative">
          <input
            id="password"
            type={displayPassword ? "text" : "password"}
            className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 font-mono js-password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="text-[black] absolute right-2 z-10 top-3"
            onClick={() => setDisplayPassword(!displayPassword)}
          >
            <FontAwesomeIcon
              icon={
                displayPassword ? (faEyeSlash as IconProp) : (faEye as IconProp)
              }
              className="fa-fw h-6 w-6 flex aspect-1"
            />
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-secondary focus:bg-secondary text-text-color hover:text-primary focus:text-primary py-3 px-4 mt-6 rounded focus:outline-none focus:shadow-outline transition-all font-bold uppercase"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
