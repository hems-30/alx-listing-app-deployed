import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-64 w-full">
      <Image
        src="/assets/banner.jpg"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
