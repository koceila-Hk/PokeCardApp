import Tags from "./Tags"

export default function TagC(props){
    return (
        <>
        {props.keysword.map((a)=>(

            <Tags  tag={a} chan={props.fun}/>
        ))}
        </>
        )
}