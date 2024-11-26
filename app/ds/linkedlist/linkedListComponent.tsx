"use client"
import { useState } from "react";
import LinkedList from "./linkedList"

function LinkedListComponent(){
    const [list] = useState(new LinkedList())
    const [input, setInput] = useState('')
    const [nodes, setNodes] = useState<string[]>([])

    const handleAdd = () => {
        list.add(input);
        setInput('')
        setNodes(list.display());
    }

    const handleRemove = (data:string) =>{
        list.remove(data);
        setNodes(list.display())
    }

    return(
        <div>
            <h2>Linked List in React</h2>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter node data" />
            <button onClick={handleAdd}>Add Node</button>
            <ul>
                {nodes.map((node, index) => <li key={index}>
                    {node} <button onClick={()=> handleRemove(node)} >Remove</button>
                </li>)}
            </ul>
        </div>

    )
}
export default LinkedListComponent;