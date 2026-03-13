function WhyChooseUs() {
  const features = [
    "100% Natural Ingredients",
    "Freshly Ground Spices",
    "Premium Quality Packaging",
    "Trusted by Thousands of Customers",
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Why Choose Our Masala
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {features.map((f, i) => (
            <div key={i} className="p-6 shadow-md rounded-lg">

              <p className="text-gray-700 font-semibold">
                {f}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;