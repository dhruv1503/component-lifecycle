import { useEffect, useState } from "react";

export const LifeCycleComponent2 = () => {
    const [state, setState] = useState(0);
    console.log("constructor");

    useEffect(() => {
        setState(state + 1);
       console.log("state update")
       return () => {
         console.log("component will unmount")
       }
    }, [])

    return console.log("component rendered")

}