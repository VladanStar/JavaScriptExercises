import React, {useContext,useState} from "react";
import { PlayerContext } from "../PlayerContext/PlayerContext";

const AddPlayer =()=>{
    const[name, setName] =useState("");
    const[godine, setGodine] = useState("");
    const[pozicija, setPozicija] = useState("");

    const updateName=(e)=>{
        setName(e.target.value);
    }
    const updateGodine =(e)=>{
        setGodine(e.target.value);
    }
    const updatePozicija=(e)=>{
        setPozicija(e.target.value);
    }

    const [players, setPlayers] = useContext(PlayerContext);
    const addPlayer =(e)=>{
        e.preventDefault();
        setPlayers(prevPlayers =>[...prevPlayers,{name:name, godine:godine,pozicija:pozicija}])
    }

    return (
        <form onSubmit={addPlayer}>
            <input type="text" name="name" value={name} onChange={updateName} placeholder="surname and name"/>
            <input type="text" name="name" value={godine} onChange={updateGodine} placeholder="years"/>
            <input type="text" name="name" value={pozicija} onChange={updatePozicija} placeholder="possition"/>
            <button>Submit</button>

        </form>

    )
}
export default AddPlayer;