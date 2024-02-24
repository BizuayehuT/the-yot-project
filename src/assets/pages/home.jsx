const Products = [
  
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
];

import { Category } from "../components/category";
import { ProductCard } from "../components/products-card";  
export const Home = () => {
  return (
    <main className="flex flex-col p-10 gap-16">
      <Category />
      <div className="flex flex-col p-10">
        <h4 className="text-xl font-bold ">Products</h4>
        <div>
          {Products.map((product) => (
          <ProductCard key={product.id} />
        ))}
        </div>
      </div>
    </main>
    );
  };
    
