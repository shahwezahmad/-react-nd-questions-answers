import React, { useMemo, useState } from 'react'
import RecipieData from '../data/RecipieData'

function FilterRecipies() {
    const ratings = [4.0, 4.3, 4.5, 4.7, 4.9]
    const [reciepies, setRecipies] = useState(RecipieData)
    const [selectedRating, setSelectedRating] = useState(ratings[0])
    const [cartCount, setCartCount] = useState(0)


   function calcuateAverageRating(data){
        let totalRating = data.reduce((acc, item) => acc + item.rating, 0)
        let average = (totalRating / data.length).toFixed(2)
        return average
   }

   const handleFilterProducts = (e) => {
    let selectedRating  =parseFloat(e.target.value)
    let filteredRecipies = RecipieData.filter( item => item.rating >= selectedRating )
    
    setSelectedRating(selectedRating)
    setRecipies(filteredRecipies)
   }

   const averageRating = useMemo(() => calcuateAverageRating(reciepies), [reciepies])
  return (
    <div>
        <h1>Filter Recipies</h1>
        {/* header */}
        <header style={{display:'flex', justifyContent:'space-between' , alignItems:'center', width:'400px'}}>
            <div>
            <p>Filter by Rating:
            <select value={selectedRating} onChange={handleFilterProducts}>
                {ratings.map((item,ind) => (
                    <option key={ind} value={item}>{item}{ind < ratings.length - 1 && '+'}</option>
                ))}
            </select> 
            </p> 
            </div>
            <div>
                <h3>Cart Item: {cartCount}</h3>
            </div>
        </header>
        <hr />
        <main>
            <section>
                <h3>Average Rating: {averageRating} ( {reciepies.length} Recipies)</h3>
            </section>
            <section>
                {reciepies.length > 0 ? (
                <>
                    {reciepies.map((item) =>  (
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'20px', flexWrap:'wrap', marginTop:'20px', border:'1px solid black', borderRadius:'12px'}}>
                            <img src={item.image} alt={item.name} style={{borderRadius:'8px', width:'100px', objectFit:'cover', height:'100px'}} />
                            <h4>N{item.name}</h4>
                            <p>{item.cuisine}</p>
                            <p>{item.rating}</p>
                            <div>
                                <button onClick={() => setCartCount(prev => prev + 1)}> Add to Cart</button>
                            </div>
                        </div>
                    ) )}
                </>
                ) : <p>No Reciepies Found</p>}
            </section>
        </main>
    </div>
  )
}

export default FilterRecipies
