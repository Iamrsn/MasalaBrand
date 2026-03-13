import { useState } from "react";

function ProductCard({ name, price, image }) {

const [open,setOpen] = useState(false)

return(

<>

<div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">

<div className="overflow-hidden">
<img
src={image}
alt={name}
className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
/>
</div>

<div className="p-6 text-center">

<h3 className="text-xl font-semibold text-gray-800">
{name}
</h3>

<p className="text-orange-500 font-bold mt-2">
₹{price}
</p>

<button
onClick={()=>setOpen(true)}
className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
>
Quick View
</button>

</div>

</div>


{/* MODAL */}

{open && (

<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">

<div className="bg-white rounded-xl p-8 max-w-md w-full relative">

<button
onClick={()=>setOpen(false)}
className="absolute top-3 right-3 text-gray-600 text-xl"
>
✕
</button>

<img
src={image}
className="w-full h-60 object-cover rounded"
/>

<h2 className="text-2xl font-bold mt-4">
{name}
</h2>

<p className="text-orange-500 font-bold mt-2 text-lg">
₹{price}
</p>

<p className="text-gray-600 mt-3">
Premium quality Indian spice made from natural ingredients.
</p>

<button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600">
Order Now
</button>

</div>

</div>

)}

</>

)

}

export default ProductCard