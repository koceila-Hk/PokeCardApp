export default function Config(props){



    return(
        <div className="input-container">

            <input type="number" name="" className="input-number input-focus" value={props.cout} onChange={props.change}  />
            <input type="text" name="" className="input-text input-focus" defaultValue={props.nom} onChange={props.changeNom}/>
            <input type="text" name="" className="input-text input-focus" defaultValue={props.explication} onChange={props.changeExp} />
       
        </div>
    )
}