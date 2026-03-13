import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {

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
  ];

  return (
    <div>

      {/* HERO SECTION */}

      <section className="bg-orange-50 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <div>

            <h1 className="text-5xl font-bold text-gray-800 leading-tight">
              Premium Indian Spices
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Bring authentic taste and aroma to your kitchen with our
              high quality masalas made from natural ingredients.
            </p>

            <button className="mt-6 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
              Shop Now
            </button>

          </div>

          <img
            className="rounded-xl shadow-lg hover:scale-105 transition duration-500"
            src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
            alt="spices"
          />

        </div>

      </section>


      {/* WHY CHOOSE US */}

      <WhyChooseUs />


      {/* BEST SELLING PRODUCTS */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-3xl font-bold text-gray-800">
              Best Selling Products
            </h2>

            <p className="text-gray-500 mt-3">
              Discover our most loved spices by customers.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

            {products.map((p, index) => (
              <ProductCard key={index} {...p} />
            ))}

          </div>

        </div>

      </section>


      {/* TESTIMONIALS */}

      <Testimonials />


      {/* NEWSLETTER */}

      <Newsletter />


      {/* CALL TO ACTION */}

      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-24 text-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            Experience the Taste of Authentic Indian Spices
          </h2>

          <p className="mt-6 text-lg text-gray-100">
            Order today and bring the rich aroma and flavor of traditional
            Indian masalas directly to your kitchen.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Shop Products
            </button>

            <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;