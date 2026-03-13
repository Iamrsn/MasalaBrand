function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Best quality spices! The aroma and taste are amazing.",
    },
    {
      name: "Priya Verma",
      text: "I love the freshness of these masalas. Highly recommended!",
    },
    {
      name: "Amit Patel",
      text: "Authentic Indian spices with great packaging and quality.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">

              <p className="text-gray-600">
                "{r.text}"
              </p>

              <h4 className="mt-4 font-semibold text-orange-600">
                {r.name}
              </h4>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;