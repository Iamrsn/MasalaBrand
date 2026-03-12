import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

const [menu,setMenu] = useState(false)

return(

<nav className="bg-white shadow-md sticky top-0 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

{/* Logo */}

<Link 
to="/" 
className="text-2xl font-bold text-red-600 hover:text-orange-500 transition"
>
MasalaBrand
</Link>

{/* Desktop Menu */}

<div className="hidden md:flex items-center gap-8 font-medium">

<Link to="/" className="hover:text-orange-500 transition">
Home
</Link>

<Link to="/products" className="hover:text-orange-500 transition">
Products
</Link>

<Link to="/recipes" className="hover:text-orange-500 transition">
Recipes
</Link>

<Link to="/about" className="hover:text-orange-500 transition">
About
</Link>

<Link to="/contact" className="hover:text-orange-500 transition">
Contact
</Link>

{/* CTA Button */}

<Link
to="/products"
className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
>
Shop Now
</Link>

</div>

{/* Mobile Button */}

<button
onClick={()=>setMenu(!menu)}
className="md:hidden text-3xl text-gray-700"
>
☰
</button>

</div>


{/* Mobile Menu */}

{menu && (

<div className="md:hidden bg-white border-t">

<div className="flex flex-col items-center gap-6 py-6 font-medium">

<Link to="/" onClick={()=>setMenu(false)}>
Home
</Link>

<Link to="/products" onClick={()=>setMenu(false)}>
Products
</Link>

<Link to="/recipes" onClick={()=>setMenu(false)}>
Recipes
</Link>

<Link to="/about" onClick={()=>setMenu(false)}>
About
</Link>

<Link to="/contact" onClick={()=>setMenu(false)}>
Contact
</Link>

<Link
to="/products"
className="bg-red-600 text-white px-6 py-2 rounded-lg"
onClick={()=>setMenu(false)}
>
Shop Now
</Link>

</div>

</div>

)}

</nav>

)

}

export default Navbar