import { useEffect, useState } from "react";
import parse from "html-react-parser";
import Image from "next/image";
interface AgeVerificationProps {
  ageVerification: {
    title: string;
    description: string;
    backgroundImage: string;
  };
  logo: string;
}

export default function AgeVerification({
  ageVerification,
  logo,
}: AgeVerificationProps) {
  const [isVerified, setIsVerified] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("ageVerified") === "true";
    }
    return false;
  });

  if (!ageVerification) return null;
  const { title, description, backgroundImage } = ageVerification;

  const verifyAge = () => {
    localStorage.setItem("ageVerified", "true");
    setIsVerified(true);
  };

  if (isVerified) {
    return null;
  }
  console.log(logo);
  return (
    <div className="absolute inset-0 h-100vh z-[1001]  bg-[#000000]">
      <div className="flex items-center justify-center h-100vh flex-col gap-4 relative z-10 p-4">
        <div className="bg-bg p-4 lg:p-8 rounded shadow-md flex flex-col items-center justify-center mx gap-4 w-full max-w-lg transition-padding duration-[400ms] max-h-max mt-auto">
          {logo && (
            <Image
              src={logo}
              className="w-[100px] md:w-[160px] max-h-[120px] cursor-pointer object-contain transition-all duration-[400ms] block"
              alt=""
              width={0}
              height={0}
              sizes="100%"
            />
          )}
          {title && (
            <h2 className="text-2xl font-bold text-center max-w-sm">{title}</h2>
          )}
          <div className="flex flex-col lg:flex-row gap-2 w-full">
            <a
              href="https://www.responsibility.org/"
              className="text-xl font-bold text-text-color w-full lg:w-1/2 bg-[#ffffff00] border border-primary text-center uppercase py-2 hover:bg-tertiary focus-within:bg-tertiary transition-all duration-[400ms] hover:rounded"
            >
              Exit
            </a>
            <button
              type="button"
              className="text-xl font-bold text-text-overlay w-full lg:w-1/2 bg-primary text-center uppercase py-2 hover:bg-secondary focus-within:bg-secondary transition-all duration-[400ms] hover:rounded"
              onClick={() => verifyAge()}
            >
              Enter
            </button>
          </div>
        </div>
        {description && (
          <p className="text-[#fff] uppercase font-bold text-sm max-w-lg px-4 py-4 mx-auto text-center mt-auto max-h-max">
            {parse(description)}
          </p>
        )}
      </div>
      {backgroundImage && (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-md opacity-60">
          <Image
            src={backgroundImage}
            alt="Age Verification Background"
            width={0}
            height={0}
            sizes="100%"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
