import LogoSvg from "../assets/icons/paw-print.svg?react";

export default function Logo() {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <LogoSvg className="fill-white w-7 h-7 rotate-330" />
        <h1 className="text-4xl text-white">Meow-Meow Memory</h1>
      </div>
    </>
  );
}
