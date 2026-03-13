import { useState } from "react";

function Testimonials(){

const reviews = [
{
name:"Rahul Sharma",
text:"Best quality spices! The aroma and taste are amazing."
},
{
name:"Priya Verma",
text:"I love the freshness of these masalas. Highly recommended!"
},
{
name:"Amit Patel",
text:"Authentic Indian spices with great packaging and quality."
}
]

const [index,setIndex] = useState(0)

function next(){
setIndex((index+1) % reviews.length)
}

function prev(){
setIndex((index-1 + reviews.length) % reviews.length)
}

return(

<section className="py-20 bg-gray-50">

<div className="max-w-4xl mx-auto text-center px-6">

<h2 className="text-3xl font-bold mb-10">
What Our Customers Say
</h2>

<div className="bg-white p-10 rounded-xl shadow">

<p className="text-gray-600 text-lg">
"{reviews[index].text}"
</p>

<h4 className="mt-6 font-semibold text-orange-600">
{reviews[index].name}
</h4>

</div>

<div className="flex justify-center gap-4 mt-6">

<button
onClick={prev}
className="px-4 py-2 bg-orange-500 text-white rounded"
>
←
</button>

<button
onClick={next}
className="px-4 py-2 bg-orange-500 text-white rounded"
>
→
</button>

</div>

</div>

</section>

)

}

export default Testimonials