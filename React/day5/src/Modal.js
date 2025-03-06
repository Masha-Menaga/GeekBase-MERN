import React, { forwardRef } from 'react'

const Modal = forwardRef(({ func }) => {
    return (
        <div>
            <button onClick={func}>Dialog</button>
        </div>
    )
})

export default Modal