import React, { useEffect, useState } from 'react'

const ApiFetching = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/"); //fetch APi data
                const data = await response.json();
                setProducts(data) //Stores data in state
            } catch (error) {
                console.error("Error Fetching Data : ", error)
            }
        }
        fetchProducts(); // Call the Function
    }, []) // Runs only Once when the Component Mounts
    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} width="50" />
                        {product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ApiFetching