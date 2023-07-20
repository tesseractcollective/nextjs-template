interface ParallaxProps {
  parallaxImage?: string;
}

export default function Parallax({
  parallaxImage
}: ParallaxProps) {

  return (
    <div className="parallax-container vignette">
    <div
      className="image-parallax"
      style={{
        backgroundImage: `url(${parallaxImage})`,
      }}
    />
  </div>
  );
}
