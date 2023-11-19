import React, { useState } from 'react'
import NavResp from '../navbar/navbar'

export default function Lang() {
    const [lang,langset] = useState('EN')
    let langs = {
        "FR":'salut et bienvenue dans le site',
        "EN":"hello , welcome to my world",
        "ES":"muchas gracias afficion es nos otros SUUUIIIIIIIIIII"
    }
  return (
    <div>
        <NavResp/><br/><br/><br/>
      <h1>{langs[lang]}</h1>
      <button type='button' className="btn btn-secondary" onClick={()=>langset("FR")}>FR</button><br/>
      <button type='button' className="btn btn-secondary" onClick={()=>langset("EN")}>EN</button><br/>
      <button type='button' className="btn btn-secondary" onClick={()=>langset("ES")}>ES</button>
    </div>
  )
}
