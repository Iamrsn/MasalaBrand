import ProductCard from "../components/ProductCard";

function Products() {

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

return (

<div className="max-w-7xl mx-auto py-16 px-6">

<h2 className="text-3xl font-bold text-center mb-10">
Our Products
</h2>

{/* ADD RESPONSIVE GRID HERE */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

{products.map((p,index)=>(

<ProductCard key={index} {...p}/>

))}

</div>

</div>

)

}

export default Products