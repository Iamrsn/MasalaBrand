function About() {

return(

<div className="bg-orange-50 py-16">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-14">

<h1 className="text-4xl md:text-5xl font-bold text-red-700">
About Our Brand
</h1>

<p className="text-gray-600 mt-4 max-w-2xl mx-auto">
We bring authentic Indian spices directly from farms to your kitchen,
ensuring rich flavor, aroma, and premium quality.
</p>

</div>


{/* Brand Story */}

<div className="grid md:grid-cols-2 gap-10 items-center mb-20">

<img
src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
className="rounded-xl shadow-lg"
/>

<div>

<h2 className="text-3xl font-semibold mb-4 text-gray-800">
Our Story
</h2>

<p className="text-gray-600 leading-7">
Our journey started with a passion for delivering authentic Indian spices.
We carefully source our ingredients from trusted farms and process them
with the highest quality standards to maintain freshness and taste.
</p>

<p className="text-gray-600 mt-4">
From turmeric and chili powder to garam masala, our products bring
traditional flavors to modern kitchens around the world.
</p>

</div>

</div>


{/* Why Choose Us */}

<div className="text-center mb-12">

<h2 className="text-3xl font-bold text-gray-800">
Why Choose Our Masala
</h2>

</div>

<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-xl font-semibold mb-2">
🌿 Natural Ingredients
</h3>

<p className="text-gray-600">
We use 100% natural spices without artificial colors or preservatives.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-xl font-semibold mb-2">
⭐ Premium Quality
</h3>

<p className="text-gray-600">
Our spices are carefully processed to maintain aroma and flavor.
</p>

</div>

<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-xl font-semibold mb-2">
🚚 Fast Delivery
</h3>

<p className="text-gray-600">
We ensure quick and safe delivery so your spices stay fresh.
</p>

</div>

</div>

</div>

</div>

)

}

export default About