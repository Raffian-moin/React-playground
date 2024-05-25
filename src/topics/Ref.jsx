import { useRef, forwardRef } from "react";

const ForwardedRef = forwardRef((props, ref) => {
    return <h1 ref={ref}>This component forwards Refs</h1>
})

export default function Ref(params) {

    const countRef = useRef(5);
    const domRef = useRef(null);
    const forwardRef = useRef(null)

    const userObjRef = useRef({
        name: "Moin"
    })

    const handelClick = () => {
        console.log(domRef.current.tagName);
    }

    const handleForwardRef = () => {
        console.log(forwardRef.current);
    }


    return(
        <>
            <ForwardedRef ref={forwardRef}/>
            <p ref={domRef} onClick={handelClick}>what is the count? : {countRef.current}</p>
            <p>what is the name? : {userObjRef.current.name}</p>
            <button onClick={handleForwardRef}>Forward Ref Test</button>
        </>

    )
}


