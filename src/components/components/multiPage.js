import {useState} from 'react';

export const useMultiPage = (pgs, sub =()=>{})=>{
    const pages = Array.isArray(pgs) ? pgs : [null];
    const [index, setIndex] = useState(0);
    const isLast = index === pages.length-1;
    const isFirst = index === 0;


    const jumpTo    = (i)=> {
        const goToIndex = i<0 ? 0 : (i>=pages.length  ? pages.length-1 : i );
        setIndex( ()=>goToIndex );
    }
    const next = <button type={!isLast ? "button" : "submit"} onClick={!isLast ? ()=>jumpTo(index+1) : null}>{isLast ? 'Submit' : 'Next'}</button>;
    const prev = !isFirst  ? <button type="button" onClick={()=>jumpTo(index-1)}>Prev</button> : null;
    const stat    = <>{index+1}/{pages.length}</>
    return { index, thePage:pages[index], next, prev, stat, jumpTo, isLast, isFirst}
}
