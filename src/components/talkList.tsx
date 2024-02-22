"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export function TalkList() {

    const [itemInput, setItemInput] = useState('');

    const [list, setList] = useState<TodoItem[]>([]);

    function handleAddtask(){
        if(itemInput == ""){
            alert('Campo não pode estar vazio');
            return;
        }
        setList([
            ...list,
            {label: itemInput, checked: false}
        ]);

        setItemInput('');
    }

    function deleteItem(index:number){
        setList(list.filter((item, key) => key !== index))
    }

    function toggleItem(index:number){
        let nemList = [...list];
        for (let i in nemList){
            if(index == parseInt(i)){
                nemList[i].checked = !nemList[i].checked
            }
        }

        setList(nemList)
    }

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-2xl">
            <h1 className="text-4xl mt-5">Talk List</h1>

            <div className="flex w-full max-w-lg m-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
                <input type="text"
                    placeholder="O que fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
                    value={itemInput}
                    onChange={e => setItemInput(e.target.value)}
                />

                <button onClick={handleAddtask} className="text-white">Adicionar</button>
            </div>

            <p className="my-4">{list.length} Itens na lista</p>

            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map((item, index) => (
                    <li key={index}>
                        <input onClick={() => toggleItem(index)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
                        {item.label}<button onClick={() => deleteItem(index)} className="hover:underline">[ Deletar ]</button>
                    </li>
                ))}

            </ul>

        </div>
    );
}