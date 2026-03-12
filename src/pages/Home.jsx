function Home() {

  return (

    <section className="bg-orange-50 py-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

        <div>

          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            Premium Indian Spices
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Bring authentic taste and aroma to your kitchen with our high quality masalas.
          </p>

          <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
            Shop Now
          </button>

        </div>

        <img
          className="rounded-xl shadow-lg"
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
        />

      </div>

    </section>

  );

}

export default Home;


// function Home() {

// const products = [

// {
// name:"Turmeric Powder",
// price:"₹120",
// image:"https://images.unsplash.com/photo-1615485737457-5f8b4f6e9d8c"
// },

// {
// name:"Red Chilli Powder",
// price:"₹150",
// image:"https://images.unsplash.com/photo-1625944525903-c9f9b2f3b5e8"
// },

// {
// name:"Garam Masala",
// price:"₹200",
// image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38"
// }

// ]

// return (

// <div>

// {/* HERO SECTION */}

// <section className="bg-orange-50 py-20">

// <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

// <div>

// <h1 className="text-5xl font-bold text-gray-800 leading-tight">
// Premium Indian Spices
// </h1>

// <p className="mt-4 text-gray-600 text-lg">
// Bring authentic taste and aroma to your kitchen with our high quality masalas.
// </p>

// <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition">
// Shop Now
// </button>

// </div>

// <img
// className="rounded-xl shadow-lg"
// src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
// />

// </div>

// </section>


// {/* FEATURED PRODUCTS */}

// <section className="py-16">

// <div className="max-w-7xl mx-auto px-6">

// <h2 className="text-3xl font-bold text-center mb-10">
// Featured Products
// </h2>

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

// {products.map((product,index)=>(

// <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">

// <img
// src={product.image}
// className="w-full h-56 object-cover"
// />

// <div className="p-4 text-center">

// <h3 className="text-lg font-semibold">
// {product.name}
// </h3>

// <p className="text-red-600 font-bold mt-2">
// {product.price}
// </p>

// <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
// Buy Now
// </button>

// </div>

// </div>

// ))}

// </div>

// </div>

// </section>


// {/* WHY CHOOSE US */}

// <section className="bg-orange-50 py-16">

// <div className="max-w-7xl mx-auto px-6">

// <h2 className="text-3xl font-bold text-center mb-12">
// Why Choose Our Spices
// </h2>

// <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

// <div className="bg-white p-6 rounded-xl shadow text-center">

// <h3 className="text-xl font-semibold mb-2">
// 🌿 Natural Ingredients
// </h3>

// <p className="text-gray-600">
// We use only natural spices without preservatives.
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow text-center">

// <h3 className="text-xl font-semibold mb-2">
// ⭐ Premium Quality
// </h3>

// <p className="text-gray-600">
// Our masalas are processed to maintain freshness and flavor.
// </p>

// </div>

// <div className="bg-white p-6 rounded-xl shadow text-center">

// <h3 className="text-xl font-semibold mb-2">
// 🚚 Fast Delivery
// </h3>

// <p className="text-gray-600">
// Quick delivery to ensure your spices remain fresh.
// </p>

// </div>

// </div>

// </div>

// </section>


// {/* CALL TO ACTION */}

// <section className="py-16 text-center">

// <h2 className="text-3xl font-bold mb-4">
// Experience Authentic Indian Flavors
// </h2>

// <p className="text-gray-600 mb-6">
// Order premium spices today and transform your cooking.
// </p>

// <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700">
// Shop Now
// </button>

// </section>

// </div>

// );

// }

// export default Home;