import { useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Products() {

const [category,setCategory] = useState("all")

const products = [
{
name:"Turmeric Powder",
price:120,
category:"powder",
image:"https://images.unsplash.com/photo-1615485737457-5f8b4f6e9d8c"
},
{
name:"Red Chilli Powder",
price:150,
category:"powder",
image:"https://images.unsplash.com/photo-1625944525903-c9f9b2f3b5e8"
},
{
name:"Garam Masala",
price:200,
category:"blend",
image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38"
},
{
name:"Coriander Powder",
price:140,
category:"powder",
image:"https://images.unsplash.com/photo-1604908177522-4725c0f7e6a4"
},
{
name:"Black Pepper",
price:220,
category:"whole",
image:"https://images.unsplash.com/photo-1604908177420-bf54f7c7c3c1"
},
{
name:"Cumin Powder",
price:160,
category:"powder",
image:"https://images.unsplash.com/photo-1590080875852-ba44f83ff0df"
}
]

const filteredProducts =
category === "all"
? products
: products.filter((p)=>p.category === category)

return(

<div>

{/* HERO */}

<section className="bg-gradient-to-r from-orange-100 to-red-100 py-24 text-center">

<h1 className="text-5xl font-bold text-gray-800">
Our Premium Spices
</h1>

<p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
Discover authentic Indian spices crafted to bring rich flavor
and aroma to your kitchen.
</p>

</section>


{/* CATEGORY FILTER */}

<section className="py-10 bg-white">

<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">

<button
onClick={()=>setCategory("all")}
className={`px-6 py-2 rounded-full ${
category==="all"
? "bg-orange-500 text-white"
: "border border-orange-500 text-orange-500 hover:bg-orange-100"
}`}
>
All
</button>

<button
onClick={()=>setCategory("powder")}
className={`px-6 py-2 rounded-full ${
category==="powder"
? "bg-orange-500 text-white"
: "border border-orange-500 text-orange-500 hover:bg-orange-100"
}`}
>
Powder Spices
</button>

<button
onClick={()=>setCategory("whole")}
className={`px-6 py-2 rounded-full ${
category==="whole"
? "bg-orange-500 text-white"
: "border border-orange-500 text-orange-500 hover:bg-orange-100"
}`}
>
Whole Spices
</button>

<button
onClick={()=>setCategory("blend")}
className={`px-6 py-2 rounded-full ${
category==="blend"
? "bg-orange-500 text-white"
: "border border-orange-500 text-orange-500 hover:bg-orange-100"
}`}
>
Blended Masala
</button>

</div>

</section>


{/* PRODUCTS GRID */}

<section className="bg-gray-50 py-20">

<div className="max-w-7xl mx-auto px-6">

<div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

{filteredProducts.map((p,index)=>(
<ProductCard key={index} {...p}/>
))}

</div>

</div>

</section>


{/* QUALITY SECTION */}

<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6 text-center">

<h2 className="text-3xl font-bold mb-12">
Our Quality Promise
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="bg-orange-50 p-8 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-xl font-bold text-orange-500">
100% Natural
</h3>

<p className="mt-3 text-gray-600">
Our spices are completely natural with no artificial colors.
</p>

</div>

<div className="bg-orange-50 p-8 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-xl font-bold text-orange-500">
Freshly Packed
</h3>

<p className="mt-3 text-gray-600">
Packed carefully to maintain aroma and freshness.
</p>

</div>

<div className="bg-orange-50 p-8 rounded-xl shadow hover:shadow-lg transition">

<h3 className="text-xl font-bold text-orange-500">
Premium Quality
</h3>

<p className="mt-3 text-gray-600">
Trusted by thousands of customers for rich flavor and quality.
</p>

</div>

</div>

</div>

</section>


{/* CTA */}

<section className="bg-gradient-to-r from-orange-500 to-red-500 py-20 text-center text-white">

<h2 className="text-4xl font-bold">
Taste the Authentic Flavor of India
</h2>

<p className="mt-4 text-lg">
Order today and experience premium Indian spices.
</p>

<Link
to="/contact"
className="inline-block mt-6 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
>
Contact Us
</Link>

</section>

</div>

)

}

export default Products