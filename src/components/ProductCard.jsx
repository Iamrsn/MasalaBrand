function ProductCard({ image, name, price }) {

  return (

    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">

      <img
        src={image}
        className="w-full h-56 object-cover"
      />

      <div className="p-4 text-center">

        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-red-600 font-bold mt-2">₹{price}</p>

        <button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
          Add to Cart
        </button>

      </div>

    </div>

  );

}

export default ProductCard;