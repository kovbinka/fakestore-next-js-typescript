import Image from "next/image";
import Link from "next/link";
import type { Product } from "../types/index";

type ProductDetailsProps = {
  product: Product;
};

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <h1 className="text-2xl font-bold mb-2">🛍️{product.title}</h1>
      <p className="text-lg text-gray-700 mb-2">💲{product.price}</p>
      <p className="text-gray-600">🔖{product.description}</p>
      <Link
        href={`/`}
        className="border p-4 font-bold bg-blue-100 mt-3 rounded shadow transition delay-120 duration-200 hover:scale-102 hover:shadow-lg flex flex-col items-center"
      >
        ↩️Go back
      </Link>
    </div>
  );
}
