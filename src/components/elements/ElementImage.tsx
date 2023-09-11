import Image from "next/image";
import { Zoom, Fade } from "react-awesome-reveal";
interface ElementImageProps {
  image?: string;
  imageCssClass?: string;
}

export default function ElementImage({
  image,
  imageCssClass,
}: ElementImageProps) {
  if (!image === true) return null;

  if (imageCssClass === "scroll-fade-left")
    return (
      <>
        <Fade triggerOnce direction="right">
          {!!image && (
            <Image
              src={image}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className={`element-image w-full h-full ${
                imageCssClass ? imageCssClass : ""
              }`}
            />
          )}
        </Fade>
      </>
    );

  if (imageCssClass === "scroll-fade-right")
    return (
      <>
        <Fade triggerOnce direction="left">
          {!!image && (
            <Image
              src={image}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className={`element-image w-full h-full ${
                imageCssClass ? imageCssClass : ""
              }`}
            />
          )}
        </Fade>
      </>
    );

  if (imageCssClass === "scroll-zoom")
    return (
      <>
        <Zoom triggerOnce>
          {!!image && (
            <Image
              src={image}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className={`element-image w-full h-full ${
                imageCssClass ? imageCssClass : ""
              }`}
            />
          )}
        </Zoom>
      </>
    );

  return (
    <>
      {!!image && (
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className={`element-image w-full h-full ${
            imageCssClass ? imageCssClass : ""
          }`}
        />
      )}
    </>
  );
}
