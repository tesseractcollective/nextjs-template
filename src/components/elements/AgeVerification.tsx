import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AgeVerification = () => {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState<boolean | null>(null);
  const [dob, setDob] = useState<string>("");

  useEffect(() => {
    // Check if user has already verified
    const savedVerification = localStorage.getItem("ageVerified");
    if (savedVerification === "true") {
      setIsVerified(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--; // Decrease age if the birthday hasn't occurred yet this year
    }

    if (age >= 21) {
      localStorage.setItem("ageVerified", "true");
      setIsVerified(true);
    } else {
      router.push("/underage");
    }
  };

  if (isVerified) {
    router.push("/"); // Redirect to homepage if verified
    return null;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">
          Please enter your date of birth
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="border rounded p-2 mb-4 w-full"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgeVerification;
