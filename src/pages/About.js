import { useQuery } from "@tanstack/react-query"
import axios from "axios"
export const About = ()=>{
    const {data: catData, isLoading, isError, refetch} = useQuery(['cat'],()=>{
        return axios.get("https://catfact.ninja/fact").then((res)=>res.data)
    })
    if(isError){
        return <h1>Error While loading</h1>
    }
    if(isLoading){
        return <h1>The fact is Loading</h1>
    }
    return (
    <>
    <h1>Cat Fact, {catData?.fact}</h1>
    <button onClick={refetch}>updata Fact</button>
    </>
    )
}
