function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">

      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800">
          {name}
        </h3>

        <p className="text-orange-500 font-bold mt-2">
          ₹{price}
        </p>

        <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductCard;