function Contact(){

return(

<div className="bg-orange-50 py-16">

<div className="max-w-7xl mx-auto px-6">

{/* heading */}

<div className="text-center mb-12">

<h1 className="text-4xl font-bold text-red-700">
Contact Us
</h1>

<p className="text-gray-600 mt-2">
We would love to hear from you. Send us a message anytime.
</p>

</div>


{/* contact section */}

<div className="grid md:grid-cols-2 gap-10">


{/* contact form */}

<div className="bg-white shadow-lg rounded-xl p-8">

<h2 className="text-2xl font-semibold mb-6">
Send a Message
</h2>

<form className="space-y-5">

<input
type="text"
placeholder="Your Name"
className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
/>

<input
type="email"
placeholder="Your Email"
className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
/>

<textarea
placeholder="Your Message"
className="w-full border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-400"
/>

<button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
Send Message
</button>

</form>

</div>


{/* contact info */}

<div className="space-y-6">

<div className="bg-white p-6 rounded-xl shadow">

<h3 className="text-xl font-semibold mb-2">
📍 Address
</h3>

<p className="text-gray-600">
Varanasi, Uttar Pradesh, India
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow">

<h3 className="text-xl font-semibold mb-2">
📞 Phone
</h3>

<p className="text-gray-600">
+91 9876543210
</p>

</div>


<div className="bg-white p-6 rounded-xl shadow">

<h3 className="text-xl font-semibold mb-2">
📧 Email
</h3>

<p className="text-gray-600">
info@masalabrand.com
</p>

</div>

</div>

</div>


{/* google map */}

<div className="mt-16">

<iframe
className="w-full h-80 rounded-xl"
src="https://www.google.com/maps?q=Varanasi&output=embed"
loading="lazy"
/>

</div>

</div>

</div>

)

}

export default Contact