import React, {useState, useEffect} from 'react';

const UsoSimple = () => {

    const [mensaje, setMensaje] = useState("");
    const [cont, setCont] = useState(0);

    useEffect(() => {
        console.log("esto pasa cuando renderiza");
    }, []);


    return(
        <div>
            <h2 className='mt-3 text-center'>Ejemplo de UseEffect</h2>
            <p>{mensaje}</p>
            <input type='text' onChange={(e)=> {setMensaje(e.target.value)}} />

            <p>{cont}</p>
            <button className='btn btn-primary' onClick={(e)=> {setCont(cont + 1)}}>Clicks</button>

        </div>
    );
}

export default UsoSimple;