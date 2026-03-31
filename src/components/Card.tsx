type CardProps = {
  image: string;
};

export default function Card({ image }: CardProps) {
  return (
    <div className="flex w-60 h-60 object-cover">
      <img src={image} width={240} height={240} className="object-cover" />
    </div>
  );
}
