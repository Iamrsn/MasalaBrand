function Recipes() {

const recipes = [
{
name:"Butter Chicken",
image:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
desc:"Creamy and flavorful butter chicken made with authentic masala spices."
},
{
name:"Chicken Biryani",
image:"https://images.unsplash.com/photo-1631515242808-497c3fbd3977",
desc:"Aromatic biryani rice cooked with rich spices and tender chicken."
},
{
name:"Paneer Tikka",
image:"https://images.unsplash.com/photo-1666001225042-1d6b0f7b66b0",
desc:"Grilled paneer cubes marinated with royal masala spices."
},
{
name:"Masala Dosa",
image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976",
desc:"Crispy dosa served with spicy potato masala filling."
},
{
name:"Chole Bhature",
image:"https://images.unsplash.com/photo-1626132647523-66b3d5e3c1c0",
desc:"Classic North Indian dish made with spicy chickpea curry."
},
{
name:"Vegetable Curry",
image:"https://images.unsplash.com/photo-1604908176997-431e8c36c4d0",
desc:"Healthy mixed vegetable curry cooked with aromatic spices."
}
]

return(
<div className="max-w-7xl mx-auto px-6 py-16">

<h1 className="text-4xl font-bold text-center text-red-700 mb-4">
Delicious Recipes
</h1>

<p className="text-center text-gray-600 mb-12">
Explore tasty recipes made with our premium masala spices.
</p>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

{recipes.map((recipe,index)=>(
<div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">

<img src={recipe.image} className="w-full h-56 object-cover"/>

<div className="p-5">
<h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>

<p className="text-gray-600 text-sm">{recipe.desc}</p>

<button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
View Recipe
</button>

</div>

</div>
))}

</div>

</div>
)
}

export default Recipes