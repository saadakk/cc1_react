import React, { useState } from 'react'
import NavResp from '../navbar/navbar'
import './App.css'

export default function Todolist() {
    const [toDo, settoDo]=useState(
    [
        {txt:"film",completed:false},
        {txt:"football",completed:false},
        {txt:"watching",completed:false}
    ])

    const [newval, setnewval]=useState("")

    const ajouter = ()=>{
        let newarr = [...toDo]
        newarr.push({txt:newval,completed:false})
        settoDo(newarr)
        setnewval("")
    }

    const changevalue= (e)=>{
        setnewval(e.target.value)
    }

    const supp = (x)=>{
        toDo.splice(x,1)
        let newTbale=[...toDo]
        settoDo(newTbale)
    }

    const completelist = (x)=>{
        let table =[...toDo];
        table[x].completed=!table[x].completed;
        settoDo(table);
    }
    
  return (
    <div>
        <NavResp/><br/><br/><br/>
        ajouter tache:<input type="text" value={newval} onChange={(e)=>changevalue(e) }/> 
        <input type="button" className="btn btn-success" value="ajouter" onClick={ajouter}/>
        <br/><br/>
        <ul>{
            toDo.map((element,x)=>{
                let pstyle =  element.completed ? {textDecorationLine:"line-through"} : {textDecorationLine:"none"};
                return (<li key={x} id={x}><p style={pstyle}>{element.txt}</p><input type='button' onClick={()=>supp(x)} className="btn btn-danger" value="supprimer"/>
                <input type='button' className="btn btn-info" value="toggle" onClick={()=>completelist(x)}/></li>)
            })
        }
        </ul>
    </div>
  )
}
