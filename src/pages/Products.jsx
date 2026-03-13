import ProductCard from "../components/ProductCard";

function Products() {

  const products = [
    {
      name: "Turmeric Powder",
      price: 120,
      image: "https://images.unsplash.com/photo-1615485737457-5f8b4f6e9d8c",
    },
    {
      name: "Red Chilli Powder",
      price: 150,
      image: "https://images.unsplash.com/photo-1625944525903-c9f9b2f3b5e8",
    },
    {
      name: "Garam Masala",
      price: 200,
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
    },
    {
      name: "Coriander Powder",
      price: 140,
      image: "https://images.unsplash.com/photo-1604908177522-4725c0f7e6a4",
    },
    {
      name: "Black Pepper",
      price: 220,
      image: "https://images.unsplash.com/photo-1604908177420-bf54f7c7c3c1",
    },
    {
      name: "Cumin Powder",
      price: 160,
      image: "https://images.unsplash.com/photo-1590080875852-ba44f83ff0df",
    },
  ];

  return (
    <div>

      {/* PAGE HERO */}

      <section className="bg-orange-100 py-16 text-center">
        <h1 className="text-5xl font-bold text-gray-800">
          Our Products
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our wide range of authentic Indian spices carefully
          selected to bring rich flavor and aroma to your dishes.
        </p>
      </section>


      {/* PRODUCT CATEGORIES */}

      <section className="py-10 bg-white">

        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">

          <button className="px-6 py-2 bg-orange-500 text-white rounded-full">
            All
          </button>

          <button className="px-6 py-2 border rounded-full hover:bg-orange-100">
            Powder Spices
          </button>

          <button className="px-6 py-2 border rounded-full hover:bg-orange-100">
            Whole Spices
          </button>

          <button className="px-6 py-2 border rounded-full hover:bg-orange-100">
            Blended Masala
          </button>

        </div>

      </section>


      {/* PRODUCTS GRID */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((p, index) => (
              <ProductCard key={index} {...p} />
            ))}

          </div>

        </div>

      </section>


      {/* QUALITY SECTION */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-xl font-bold text-orange-500">
              100% Natural
            </h3>
            <p className="mt-3 text-gray-600">
              Our spices are completely natural with no artificial colors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-500">
              Freshly Packed
            </h3>
            <p className="mt-3 text-gray-600">
              Packed with care to preserve aroma and freshness.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-orange-500">
              Premium Quality
            </h3>
            <p className="mt-3 text-gray-600">
              We deliver high quality spices trusted by thousands of customers.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="bg-orange-600 py-16 text-center text-white">

        <h2 className="text-3xl font-bold">
          Taste the Authentic Flavor of India
        </h2>

        <p className="mt-4">
          Order now and bring premium spices to your kitchen.
        </p>

        <button className="mt-6 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold">
          Shop Now
        </button>

      </section>

    </div>
  );
}

export default Products;