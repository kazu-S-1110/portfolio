import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function Avatar({ src, alt, size = 120 }: AvatarProps) {
  return (
    <div
      className="relative rounded-full overflow-hidden border-4 border-white shadow-lg"
      style={{ width: size, height: size }}
    >
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </div>
  );
}
