'use client';

import Form from "@/components/Form";
import { title } from "@/components/primitives";

export default function create() {
    return (
        <div className="flex flex-col justify-between py-3 ">
            <h1 className={title()}>Novo <span className="text-blue-700">Agendamento</span></h1>
            <h2 className="text-purple-500 py-1 text-center">visita presencial ou atendimento remoto</h2>
            <Form />
        </div>
    )
}