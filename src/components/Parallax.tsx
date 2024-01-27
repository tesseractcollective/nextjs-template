interface ParallaxProps {
  parallaxImage: string;
}

export default function Parallax({ parallaxImage }: ParallaxProps) {
  return (
    <div className="parallax-container vignette relative overflow-hidden h-[50vh] md:h-[90vh]">
      <div
        className="image-parallax absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${parallaxImage})`,
        }}
      />
    </div>
  );
}
