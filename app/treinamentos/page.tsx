'use client';

import { title } from "@/components/primitives";
import TableTrainer from "@/components/TableTrainer";

export default function treinamentos() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className={title()}>Treinamentos</h1>
            <TableTrainer />
        </div>
    )
}