import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {

const products = [
{
name:"Turmeric Powder",
price:120,
image:"https://images.unsplash.com/photo-1615485737457-5f8b4f6e9d8c"
},
{
name:"Red Chilli Powder",
price:150,
image:"https://images.unsplash.com/photo-1625944525903-c9f9b2f3b5e8"
},
{
name:"Garam Masala",
price:200,
image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38"
}
]

return(

<div>

{/* HERO SECTION */}

<section className="bg-gradient-to-r from-orange-100 to-red-100 py-24">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">

<div>

<h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
Authentic Indian Spices
</h1>

<p className="mt-6 text-gray-600 text-lg">
Bring rich aroma and authentic flavor to your kitchen with our
premium quality masalas made from natural ingredients.
</p>

<div className="mt-8 flex gap-4">

<Link
to="/products"
className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition"
>
Shop Products
</Link>

<Link
to="/contact"
className="border border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-600 hover:text-white transition"
>
Contact Us
</Link>

</div>

</div>

<img
src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
alt="Indian Spices"
className="rounded-xl shadow-xl hover:scale-105 transition duration-500"
/>

</div>

</section>


{/* WHY CHOOSE US */}

<WhyChooseUs/>


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

{products.map((p,index)=>(
<ProductCard key={index} {...p}/>
))}

</div>

</div>

</section>


{/* DISTRIBUTOR SECTION */}

<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<img
src="https://images.unsplash.com/photo-1604908176997-431e8c36c4d0"
className="rounded-xl shadow-lg"
/>

<div>

<h2 className="text-4xl font-bold text-gray-800">
Become Our Distributor
</h2>

<p className="mt-6 text-gray-600">
Join our growing network of distributors and supply premium
Indian spices to customers across your region.
</p>

<ul className="mt-6 space-y-3 text-gray-700">

<li>✔ High demand spice products</li>
<li>✔ Attractive profit margins</li>
<li>✔ Trusted brand quality</li>

</ul>

<Link
to="/contact"
className="inline-block mt-8 bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition"
>
Apply for Dealership
</Link>

</div>

</div>

</section>


{/* TESTIMONIALS */}

<Testimonials/>


{/* NEWSLETTER */}

<Newsletter/>


{/* FINAL CTA */}

<section className="bg-gradient-to-r from-orange-500 to-red-500 py-24 text-white">

<div className="max-w-5xl mx-auto text-center px-6">

<h2 className="text-4xl md:text-5xl font-bold">
Experience the Taste of Authentic Indian Spices
</h2>

<p className="mt-6 text-lg text-gray-100">
Order today and bring the rich aroma and flavor of traditional
Indian masalas directly to your kitchen.
</p>

<Link
to="/products"
className="inline-block mt-10 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
>
Shop Now
</Link>

</div>

</section>

</div>

)

}

export default Home