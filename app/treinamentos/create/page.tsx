'use client';

import Form from "@/components/Form";
import { title } from "@/components/primitives";

export default function create() {
    return (
        <div className="flex flex-col justify-normal">
            <div className="py-3">
            <h1 className={title()}>Novo <span className="text-blue-700">Agendamento</span></h1>
            <h2 className="text-purple-500">agendamento de visitas técnicas e treinamentos remotos</h2>
            </div>
            <Form />
        </div>
    )
}