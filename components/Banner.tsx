import Image from "next/image";

const Banner: React.FC = () => (
  <div className="relative h-64 w-full">
    <Image
      src="/assets/images/banner.jpg" // updated path
      alt="Banner"
      fill
      className="object-cover"
      priority
    />
  </div>
);

export default Banner;