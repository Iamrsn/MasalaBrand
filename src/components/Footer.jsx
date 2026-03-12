function Footer(){

return(

<footer className="bg-gray-900 text-white mt-20">

<div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-center md:text-left">

{/* brand */}

<div>

<h2 className="text-2xl font-bold text-orange-400">
MasalaBrand
</h2>

<p className="text-gray-400 mt-3">
Authentic Indian spices bringing rich taste to your kitchen.
</p>

</div>

{/* links */}

<div>

<h3 className="font-semibold mb-3">
Quick Links
</h3>

<div className="flex flex-col gap-2 text-gray-400">

<a href="/">Home</a>
<a href="/products">Products</a>
<a href="/recipes">Recipes</a>
<a href="/contact">Contact</a>

</div>

</div>

{/* contact */}

<div>

<h3 className="font-semibold mb-3">
Contact
</h3>

<p className="text-gray-400">
Email: info@masalabrand.com
</p>

<p className="text-gray-400">
Phone: +91 9876543210
</p>

</div>

</div>

<div className="text-center text-gray-500 border-t border-gray-700 py-4">

© 2026 MasalaBrand. All rights reserved.

</div>

</footer>

)

}

export default Footer