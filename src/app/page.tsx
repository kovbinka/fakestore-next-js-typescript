import { fetchAllProducts } from "../apis/getProducts";
import ProductCard from "../components/ProductCart";
import Header from "@/components/Header";

export default async function HomePage() {
  const products = await fetchAllProducts();

  return (
    <main className="p-6">
      <Header title="FAKE STORE" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
