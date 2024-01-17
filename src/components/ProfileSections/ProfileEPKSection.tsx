import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import type { ProfileFieldsFragment } from "@/graphql/generated/graphql";
import { Fade } from "react-awesome-reveal";
import { useSearchParams } from "next/navigation";

interface ProfilesProps {
  profileSectionTitle?: string;
  profiles: ProfileFieldsFragment[];
  siteID: string;
}

export default function ProfileEPKSection({
  profileSectionTitle,
  profiles,
  siteID,
}: ProfilesProps) {
  const profilesEPKData = profiles.filter((profile) =>
    profile.epkLink?.includes("https")
  );
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const passwordParam = useSearchParams();
  const linkPassword = passwordParam?.get("password");

  useEffect(() => {
    if (linkPassword === siteID) {
      setIsAuthorized(true);
    }
  }, [linkPassword, siteID]);

  const handlePasswordSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password === siteID) {
      setIsAuthorized(true);
    }
  };

  return (
    <div>
      {!isAuthorized ? (
        <div className="h-80vh flex items-center justify-center">
          <form onSubmit={handlePasswordSubmit} className="form flex flex-col">
            <label
              className="font-medium block mb-1 mt-6 text-text-color"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-primary hover:bg-secondary focus:bg-secondary text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline"
            >
              Enter
            </button>
          </form>
        </div>
      ) : (
        <section className="max-w-8xl mx-auto w-full my-16">
          <div className="w-full transition">
            {!!profileSectionTitle && (
              <h3 className="text-2xl md:text-4xl mx-auto opacity-80 uppercase text-center transition mb-16">
                {profileSectionTitle}
              </h3>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 w-full mx-auto lg:mx-0 transition flex-wrap">
            {profilesEPKData.map((profile) => (
              <Fade
                direction="up"
                cascade
                triggerOnce
                damping={0.015}
                key={profile.profileSlug}
                className="max-w-xs w-full"
              >
                <a
                  href={profile.epkLink || "#"}
                  target="_blank"
                  className="w-full flex flex-row justify-center items-center border-2 border-white rounded-md p-2 my-4 relative py-3 feature-link-item group bg-white hover:bg-primary focus:bg-primary transition-all"
                  rel="noreferrer"
                >
                  {profile.avatarImage?.url && (
                    <Image
                      src={profile.avatarImage.url}
                      alt={profile.name || ""}
                      className="h-16 w-16 object-cover rounded-sm relative inset-0 py-0 my-0"
                      sizes="100%"
                      width={0}
                      height={0}
                    />
                  )}
                  <p className="text-left uppercase font-bold text-sm w-full ml-4">
                    {profile.name}
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare as IconProp}
                    className="fa-fw my-0 py-0 ml-2 h-4 w-4"
                  />
                </a>
              </Fade>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
