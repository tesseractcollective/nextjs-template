interface StandOutTextProps {
  standOutText?: string;
}

export default function StandOutText({
  standOutText
}: StandOutTextProps) {

  return (
    <div className="home-standout-text-wrapper min-h-72 h-full gradient-bkg px-6 py-24 sm:py-32 lg:px-8 mx-auto w-full text-center flex items-center justify-center">
        <h3 className="home-standout-text text-shadow text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl max-w-2xl mx-auto">
          {standOutText}
        </h3>
    </div>
  );
}
