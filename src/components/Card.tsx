import { useState } from "react";

type CardProps = {
  image: string;
};

export default function Card({ image }: CardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="group relative w-full h-full min-w-25 sm:min-w-35 md:min-w-37 lg:min-w-45 aspect-square rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_15px_30px_rgba(251,191,36,0.5)] hover:-translate-y-2 active:scale-95 active:shadow-md border-4 border-amber-200 bg-amber-50">
      {/* Loading Skeleton / Placeholder */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-amber-100 to-orange-300 transition-opacity duration-500 z-10 
          ${isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="animate-bounce drop-shadow-md">
          <span className="text-4xl sm:text-5xl">:3</span>
        </div>
      </div>

      {/* Real Cat Image */}
      <img
        src={image}
        alt="Memory Cat"
        onLoad={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 
          ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Glossy Overlay effect triggered on hover */}
      <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-800 pointer-events-none transform -translate-x-[150%] group-hover:translate-x-[150%] ease-out"></div>
    </div>
  );
}
