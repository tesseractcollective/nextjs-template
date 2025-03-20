import React from "react";
import { FilloutSliderEmbed, FilloutSliderEmbedButton } from "@fillout/react";
import { useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";

type FilloutFormProps = {
  filloutData: {
    id: string;
    buttonText: string;
    header?: string;
    content?: string;
    image?: string;
  };
};
const FilloutForm: React.FC<FilloutFormProps> = ({ filloutData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { id, buttonText, image } = filloutData;
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto bg-bg shadow-lg rounded-lg my-8">
        {image && (
          <div className="relative w-full pb-[56.25%] overflow-hidden">
            <Image
              src={image}
              alt={filloutData?.header || ""}
              width={0}
              height={0}
              sizes="100%"
              className="w-full h-auto p-0 rounded-lg object-cover absolute inset-0"
            />
          </div>
        )}
        <div className="card-content-wrapper flex flex-col my-4 px-4 py-0">
          {filloutData?.header && (
            <h2 className="text-2xl font-bold mb-2">{filloutData.header}</h2>
          )}
          {filloutData?.content && (
            <p className="body-parsed-text mb-4">
              {parse(filloutData.content)}
            </p>
          )}
          <div className={`flex justify-center mb-4 max-w-max`}>
            <FilloutSliderEmbedButton
              filloutId={id}
              inheritParameters
              sliderDirection="right"
              text={buttonText}
              color="var(--primary)"
              size="small"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <FilloutSliderEmbed
          filloutId={id}
          onClose={() => setIsOpen(false)}
          onSubmit={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FilloutForm;
