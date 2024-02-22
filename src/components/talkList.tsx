"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export function TalkList() {

    const [list, setList] = useState<TodoItem[]>([
        { label: "Estudar React", checked: false },
        { label: "Estudar músicas do neojiba", checked: false }
    ]);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-3xl">
            <h1 className="text-4xl mt-5">Talk List</h1>

            <div className="flex w-full max-w-lg m-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
                <input type="text"
                    placeholder="O que fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
                />

                <button className="text-white">Adicionar</button>
            </div>

            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map(item => (
                    <li>{item.label}<button className="hover:underline">[ Deletar ]</button></li>
                ))}

            </ul>

        </div>
    );
}