import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Art Land`
    },[title])
}

export default useTitle