function Newsletter() {
  return (
    <section className="bg-gray-900 text-white py-20">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-3xl md:text-4xl font-bold">
          Subscribe For Updates
        </h2>

        <p className="mt-4 text-gray-400">
          Get latest offers and recipes directly in your inbox
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg w-72 bg-white text-black placeholder-gray-500 focus:outline-none"
          />

          <button className="bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;