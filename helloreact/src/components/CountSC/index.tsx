import { useState } from "react"

import {Title} from './styles'

export const CountSC = () => {

    const [lucas, setLucas] = useState(0)
    const nomes = ['lucas', 'maria', 'joao', 'Cícero']

    const handleClick = () => {
        setLucas(lucas + 1)
    }

    return (
        <div>
            <Title color="red">Counter App</Title>
            <p>Você já clicou {lucas} vezes</p>

            {lucas >= 10 && <h3>Parabéns vc tirou 10!</h3>}

            <button onClick={handleClick}>Contador++</button>
            <button onClick={()=>{setLucas(0)}}>Zerar</button>
            <ul>
                {nomes.map(nome=>(<li>{nome.toUpperCase()}</li>))}
            </ul>
        </div>
    )
}