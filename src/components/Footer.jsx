import { Link } from "react-router-dom";

function Footer() {

return(

<footer className="bg-gray-900 text-white mt-20">

<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

{/* Brand */}

<div>

<h2 className="text-2xl font-bold text-orange-400">
MasalaBrand
</h2>

<p className="text-gray-400 mt-3 text-sm">
Authentic Indian spices crafted to bring rich aroma and flavor to your kitchen.
</p>

</div>


{/* Quick Links */}

<div>

<h3 className="font-semibold mb-4">
Quick Links
</h3>

<div className="flex flex-col gap-2 text-gray-400 text-sm">

<Link to="/" className="hover:text-orange-400">Home</Link>
<Link to="/products" className="hover:text-orange-400">Products</Link>
<Link to="/recipes" className="hover:text-orange-400">Recipes</Link>
<Link to="/about" className="hover:text-orange-400">About</Link>
<Link to="/contact" className="hover:text-orange-400">Contact</Link>

</div>

</div>


{/* Contact */}

<div>

<h3 className="font-semibold mb-4">
Contact
</h3>

<p className="text-gray-400 text-sm">
📍 Varanasi, India
</p>

<p className="text-gray-400 text-sm mt-2">
📞 +91 9876543210
</p>

<p className="text-gray-400 text-sm mt-2">
📧 info@masalabrand.com
</p>

</div>


{/* Newsletter */}

<div>

<h3 className="font-semibold mb-4">
Newsletter
</h3>

<p className="text-gray-400 text-sm mb-3">
Get updates about new spices and recipes.
</p>

<div className="flex">

<input
type="email"
placeholder="Your email"
className="w-full px-3 py-2 rounded-l bg-gray-800 text-sm outline-none"
/>

<button className="bg-orange-500 px-4 rounded-r hover:bg-orange-600">
Subscribe
</button>

</div>

</div>

</div>


{/* Bottom Footer */}

<div className="border-t border-gray-700 text-center text-gray-500 py-4 text-sm">

© 2026 MasalaBrand. All rights reserved.

</div>

</footer>

)

}

export default Footer