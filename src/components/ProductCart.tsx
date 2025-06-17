import Link from "next/link";
import Image from "next/image";
import type { Product } from "../types/index";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const id = product.id;
  return (
    <Link
      href={`/product/${id}`}
      className="border p-4 rounded shadow transition delay-150 duration-300 hover:scale-102 hover:shadow-lg flex flex-col items-center"
    >
      <div className="relative w-full h-40 mb-2">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="pointer-events-none"
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={false}
        />
      </div>
      <h2 className="text-sm font-medium text-center">{product.title}</h2>
    </Link>
  );
}
