import parse from "html-react-parser";
import CountUp from "react-countup";

export interface ScrollDigitsType {
  cssClass: string;
  scrollDigits: ScrollDigit[];
}

export interface ScrollDigit {
  start: number;
  end: number;
  digitPrefix: string;
  digitSuffix: string;
  text: string;
  cssClassWrapper: string;
  cssClassDigit: string;
  cssClassText: string;
}

interface ScrollDigitsProps {
  scrollDigitData?: ScrollDigitsType;
}

export default function ScrollDigits({ scrollDigitData }: ScrollDigitsProps) {
  if (!scrollDigitData) return null;

  const { cssClass, scrollDigits } = scrollDigitData;

  return (
    <div className={`element-scroll-digit ${cssClass || ""}`}>
      {scrollDigits?.length >= 1 && (
        <>
          {scrollDigits.map((scrollDigit) => (
            <div key={scrollDigit.text}>
              {scrollDigit.end !== undefined &&
                scrollDigit.start !== undefined && (
                  <div className="flex flex-row items-center justify-center">
                    {scrollDigit.digitPrefix && (
                      <span className={scrollDigit.cssClassDigit}>
                        {scrollDigit.digitPrefix}
                      </span>
                    )}
                    <CountUp
                      end={scrollDigit.end}
                      start={scrollDigit.start}
                      className={scrollDigit.cssClassDigit}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {scrollDigit.digitSuffix && (
                      <span className={scrollDigit.cssClassDigit}>
                        {scrollDigit.digitSuffix}
                      </span>
                    )}
                  </div>
                )}
              {scrollDigit.text && (
                <p className={scrollDigit.cssClassText}>
                  {parse(scrollDigit.text)}
                </p>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
