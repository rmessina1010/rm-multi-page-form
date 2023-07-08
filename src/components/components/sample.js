 import { useEffect,useRef } from "react";
import { useMultiPage} from "./multiPage"

export const TheForm =({pages, subFoo, retData})=>{
    let  renders = useRef(0);
    useEffect( ()=>{ renders.current++ })
    const {thePage, next, prev, stat, onSub}= useMultiPage(pages, subFoo);
    return (
        <form onSubmit={e=>onSub(e,retData)} >
            <p>Total renders: {renders.current}</p>
            <p>page: {stat} data:{retData().samp}</p>
            <p>{thePage}</p>
            {prev}{prev?" | ":""}{next}
        </form>
    )
}