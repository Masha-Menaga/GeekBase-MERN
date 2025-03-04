import { createContext, useContext } from "react";
import React from 'react';

const CounterContext = createContext();


export default CounterContext;

export const useContext = () => {
    return (<>
        useContext
    </>)
}


