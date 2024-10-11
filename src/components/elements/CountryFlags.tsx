import React from "react";
import ReactCountryFlag from "react-country-flag";

function CountryFlags() {
  return (
    <div>
      <ReactCountryFlag countryCode="US" />

      <ReactCountryFlag
        className="emojiFlag"
        countryCode="US"
        style={{
          fontSize: "2em",
          lineHeight: "2em",
        }}
        aria-label="United States"
      />

      <ReactCountryFlag countryCode="US" svg />

      <ReactCountryFlag
        countryCode="US"
        svg
        style={{
          width: "2em",
          height: "2em",
        }}
        title="US"
      />

      <ReactCountryFlag
        countryCode="US"
        svg
        cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
        cdnSuffix="svg"
        title="US"
      />
    </div>
  );
}

export default CountryFlags;
