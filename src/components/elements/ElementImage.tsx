import Image from "next/image";

interface ElementImageProps {
  image?: string;
  imageCssClass?: string;
}

export default function ElementImage({
  image,
  imageCssClass,
}: ElementImageProps) {
  if (!image === true) return null;

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
