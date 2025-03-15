import React, { useEffect, useState } from 'react'
import axios from "axios"


const ApiAxios = () => {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await axios("https://jsonplaceholder.typicode.com/todos")
            setData(res.data);
        }
        catch (error) {
            console.error("Error Fetch Data : ", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <><h2>Datas : </h2>
            <ul>
                {data.map((ragul) => (<li key={ragul.id}>{ragul.userId}-{ragul.id}-{ragul.title}</li>))}
            </ul>
        </>
    )
}

export default ApiAxios