import { fetchProductById } from "../../../apis/getProducts";
import ProductDetails from "../../../components/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await fetchProductById(id);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <ProductDetails product={product} />
    </main>
  );
}
