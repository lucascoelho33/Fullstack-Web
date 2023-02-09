import { useCallback, useState } from "react"

import style from './styles.module.css'
import {Link} from 'react-router-dom'

export const Count = () => {

    const [lucas, setLucas] = useState(0)
    const nomes = ['lucas', 'maria', 'joao', 'Cícero']

    // const handleClick = () => {
    //    setLucas(lucas + 1)
    // }

    const handleClick = useCallback(()=>{
        setLucas(lucas + 1)},
        [lucas])

    return (
        <div>
            <h1 className={style.titleL}>Counter App</h1>
            <p>Você já clicou {lucas} vezes</p>

            {lucas >= 10 && <h3>Parabéns vc tirou 10!</h3>}

            <button onClick={handleClick}>Contador++</button>
            <button onClick={()=>{setLucas(0)}}>Zerar</button>
            <ul>
                {nomes.map(nome=>(<li>{nome.toUpperCase()}</li>))}
            </ul>

            <h3>Acessar versão SC</h3>

            <Link to="/CountSC">Clique aqui</Link>
        </div>
    )
}