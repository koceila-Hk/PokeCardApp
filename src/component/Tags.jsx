export default function Tags (props){


    return(
        <>
        
        <label htmlFor="">{props.tag}</label>
        <input type="checkbox" name="" id="" defaultValue={props.tag} onChange={props.chan}/>

        </>
    )
}