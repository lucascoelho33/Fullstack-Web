import style from './style.module.css'
// CSS Modules / Styled Components
interface Helloprops{
    name?: string 
}


export function Hello({name = 'Kauê'}: Helloprops){
    return <h2 className="title">Olá React, meu nome é {name}!</h2>
}

