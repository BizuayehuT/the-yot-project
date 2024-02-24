const categories = [
  { 
    id: "electronics",
    label: "Electronics"
  },
  { 
    id: "jewelery",
    label: "Jewelery"

  },
  {
    id: "men's clothing",
    label: "men's clothing"
  },

  {
    id:"women's clothing",
    label:"women's clothing"
  }
  
];

export const Category = () => {

  return (
  <div className="flex flex-wrap gap-6 justify-center" >
    {categories.map(category=>(
      <button key={category.id} className="rounded-lg px-4 py-2 bg-blue-200 text-gray-700 hover:bg-blue-500 hover:text-white">{category.label}</button>
      ))}
    </div>
  );
}