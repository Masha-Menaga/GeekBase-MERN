import { createContext } from "react";

const CounterContext = createContext({
    count: 0,
    increment: () => { },
    decrement: () => { }
});

export default CounterContext;
