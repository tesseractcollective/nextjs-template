import React, { useState, useEffect, useCallback } from "react";
import moment from "moment-timezone";
import Image from "next/image";
import LinkItem from "../LinkItem";
import { Fade } from "react-awesome-reveal";

interface Props {
  dateTime: string; // Format: YYYY/MM/DD HH:mm:ss
  timezone: string; // Example: 'America/New_York'
  link: string;
  image: string;
  promoText: string;
  headerText: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<Props> = ({
  dateTime,
  timezone,
  link,
  image,
  promoText,
  headerText,
}) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining | null>(
    null
  );
  const [showPromo, setShowPromo] = useState<boolean>(true);

  const calculateTimeRemaining = useCallback(() => {
    const endTime = moment.tz(dateTime, timezone);
    const currentTime = moment().tz(timezone);

    if (currentTime.isAfter(endTime)) {
      setShowPromo(false);
    } else {
      const duration = moment.duration(endTime.diff(currentTime));
      const days = Math.floor(duration.asDays());
      const hours = Math.floor(duration.hours());
      const minutes = Math.floor(duration.minutes());
      const seconds = Math.floor(duration.seconds());

      setTimeRemaining({ days, hours, minutes, seconds });
    }
  }, [dateTime, timezone]);

  useEffect(() => {
    const timer = setInterval(calculateTimeRemaining, 1000);
    calculateTimeRemaining();

    return () => clearInterval(timer);
  }, [calculateTimeRemaining]);

  return (
    <div className="flex flex-col items-center justify-center px-4 w-full mx-auto">
      {showPromo ? (
        <div className="w-full">
          {timeRemaining && (
            <Fade className="bg-glass glass-primary w-full max-w-md mx-auto flex-col items-center justify-center p-2">
              <div className="bg-[#0000007b] py-4 rounded-lg border-tertiary border">
                <h2 className="text-xl text-center font-bold uppercase text-shadow">
                  {moment(dateTime).format("MMM D, YYYY")}
                </h2>
                {image && image !== "" && (
                  <Image
                    src={image}
                    alt="Promo Image"
                    className="p-4 rounded w-full h-full max-h-72 object-contain"
                    width={0}
                    height={0}
                    sizes="100%"
                  />
                )}
                <section className="font-bold flex flex-col w-full gap-y-0 py-2 mb-4 rounded">
                  <div className="grid grid-cols-4 w-full text-center text-shadow">
                    <p className="py-0 my-0 text-5xl">{timeRemaining.days}</p>
                    <p className="py-0 my-0 text-5xl">{timeRemaining.hours}</p>
                    <p className="py-0 my-0 text-5xl">
                      {timeRemaining.minutes}
                    </p>
                    <p className="py-0 my-0 text-5xl">
                      {timeRemaining.seconds}
                    </p>
                  </div>
                  <div className="grid grid-cols-4 text-[10px] w-full text-center text-shadow">
                    <p className="mx-auto">días</p>
                    <p className="mx-auto">horas</p>
                    <p className="mx-auto">minutos</p>
                    <p className="mx-auto">segundos</p>
                  </div>
                </section>
                <p className="uppercase text-center pb-2">{promoText}</p>
                <LinkItem
                  link={link}
                  label={headerText}
                  cssClass="border-secondary border px-4 md:px-6 py-2 max-w-max block no-underline font-bold w-full text-xl !rounded-md max-w-max mx-auto"
                />
              </div>
            </Fade>
          )}
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold">Countdown Ended!</h1>
          {image && image !== "" && (
            <Image
              src={image}
              alt="Promo Image"
              className="p-4 rounded w-full h-full max-h-72"
              width={0}
              height={0}
            />
          )}
          <p className="text-lg">{headerText}</p>
        </div>
      )}
    </div>
  );
};

export default Countdown;
