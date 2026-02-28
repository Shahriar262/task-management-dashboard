import { useEffect, useState } from "react";
import api from "../../../services/api";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/products");

        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else if (res.data && Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (error)
    return <div className="p-6 text-center">Error fetching products data...</div>;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full lg:max-w-md">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg mb-8 text-gray-800">Products</h3>
        <button className="px-4 py-2 mb-8 text-green-700 font-medium rounded-3xl border-2 border-green-700 text-sm">
          + New
        </button>
      </div>

      <div className="space-y-4 text-sm">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b border-gray-50 pb-2"
            >
              <section className="flex items-center gap-2">
                <div>
                  <img
                    src="/assets/planBasic.png"
                    className="w-8 h-7"
                    alt=""
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-gray-800">
                    {product.name}
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-tighter">
                    {product.category}
                  </span>
                </div>
              </section>
              <div className="text-right">
                <p className="font-semibold text-gray-800">${product.price}</p>
                <span className="text-gray-500 text-xs">
                  {product.sales} sales
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic text-center">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
