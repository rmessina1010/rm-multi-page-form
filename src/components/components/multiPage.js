import {useState} from 'react';

export const useMultiPage = (pgs, sub =()=>{}, messages={}, supress)=>{
    const pages = Array.isArray(pgs) ? pgs : [null];
    const [index, setIndex] = useState(0);
    // const [data, setData] = useState(defData);
    const isLast = index === pages.length-1;
    const isFirst = index === 0;

    const jumpTo    = (i)=> {
        if (i<0 || i >= pages.length){return;}
        setIndex( i );
    }

    // const updateData = (newData) => setData({...data, ...newData});
    const onSub = (e)=>{
        e.preventDefault();
        if (isLast){
            if (sub){ sub(e);}
            if (!supress){ e.target.submit(); }
            return;
        }
        jumpTo(index+1);
    }

    const next = <button>{isLast ? messages.sub||'Submit' : messages.next ||'Next'}</button>;
    const prev = !isFirst  ? <button type="button" onClick={()=>jumpTo(index-1)}>{messages.prev||'Prev'}</button> : null;
    const stat    = <>{index+1}{messages.div||'/'}{pages.length}</>
    return { index, thePage:pages[index], next, prev, stat, jumpTo, isLast, isFirst, onSub}
}
