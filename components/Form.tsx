import React from 'react';
import { Button, DatePicker, DateValue, Input, Select, SelectItem } from '@nextui-org/react';
import {parseAbsoluteToLocal} from "@internationalized/date";
import { modalidade } from '@/app/data/selectorData';

export default function Form() {

    let [date, setDate] = React.useState<DateValue>(parseAbsoluteToLocal("2024-04-07T18:45:22Z"));
    
    return (
        <form>
            <div>
                <div className='flex flex-col w-full gap-y-3'>
                    <Input type="name" label="Cliente" placeholder='Razão Social' />
                    <Input type="System" label="Sistema" placeholder='ex:PontoWeb' />
                    <DatePicker
                        className="max-w-md"
                        granularity="second"
                        label="Data e hora"
                        value={date}
                        onChange={setDate}
                    />
                    <Select 
                        label="Selecione a modalidade" 
                        className="w-full" 
                    >
                        {modalidade.map((modalidade) => (
                        <SelectItem key={modalidade.id}>
                            {modalidade.label}
                        </SelectItem>
                        ))}
                    </Select>
                    <Button color='primary'>Salvar</Button>
            
                </div>
            </div>
        </form>
    )
}