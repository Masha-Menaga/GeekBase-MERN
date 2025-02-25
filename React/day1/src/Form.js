import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [boo, setBoo] = useState(false)

    return (
        <div>
            <label htmlFor="name"  >Name : </label>
            <input name="name" type="text" onChange={(e) => setName(e.target.value)} />
            <lable htmlFor="location">Location : </lable>
            <input name="location" type="text" onChange={(e) => setLocation(e.target.value)} />
            <button onClick={() => setBoo(true)}>Submit</button>
            {
                boo ? (<><p>{name}<br />
                    {location}</p></>) : false
            }
        </div>
    )
}

export default Form