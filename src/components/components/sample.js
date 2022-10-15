 import { useEffect,useRef } from "react";
import { useMultiPage } from "./multiPage"

export const TheForm =({pages, subFoo})=>{
    let  renders = useRef(0);
    useEffect( ()=>{ renders.current++ })
    const {thePage, next, prev, stat, onSub}= useMultiPage(pages, subFoo);
    return (
        <form onSubmit={onSub}>
            <p>{renders.current}</p>
            <p>{stat}</p>
            <p>{thePage}</p>
            {prev}{prev?" | ":""}{next}
        </form>
    )
}