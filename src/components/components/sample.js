 import { useMultiPage } from "./multiPage"

export const TheForm =({pages})=>{
    const {thePage, next, prev, stat, onSub}= useMultiPage(pages);
    return (
        <form>
            <p>{stat}</p>
            <p>{thePage}</p>
            {prev}{prev?" | ":""}{next}
        </form>
    )
}