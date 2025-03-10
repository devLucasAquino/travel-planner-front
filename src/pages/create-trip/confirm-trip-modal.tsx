import { FormEvent } from 'react';

import { X, User, Mail} from 'lucide-react';
import { Button } from '../../components/button';

interface ConfirmTripModalProps {
    close: () => void;
    setOwnerName: (name: string) => void;
    setOwnerEmail: (email: string) => void;
    createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal( {
    close,
    setOwnerEmail,
    setOwnerName,
    createTrip,
}: ConfirmTripModalProps ){
    
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                <div className='space-y-2'>
                    <div className="flex items-center justify-between">
                        <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                        <button onClick={close}>
                            <X className='size-5 text-zinc-400'/>
                        </button>
                    </div>
                    <p className='text-zinc-400 text-sm'>
                      Para concluir a criação da viagem para 
                      <span className='font-semibold text-zinc-100'>Florianópolis, Brasil </span> 
                      <span className='font-semibold text-zinc-100'>nas datas de 16 a 27 de Agosto de 2024 </span>
                      preencha seus dados abaixo:
                    </p>
                </div>

                <form onSubmit={createTrip} className='space-y-3'>

                   <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <User className='text-zinc-400 size-5'/>
                    <input 
                        type="text" 
                        name='name' 
                        placeholder="Digite seu nome completo"
                        onChange={event => setOwnerName(event.target.value)}   
                        className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none" />
                   </div>

                   <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                    <Mail className='text-zinc-400 size-5'/>
                    <input 
                        type="email" 
                        name='email' 
                        placeholder="Digite seu e-mail pessoal"
                        onChange={event => setOwnerEmail(event.target.value)}  
                        className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none" />
                   </div>
                   
                    <Button type='submit' size='full'>
                        Confirmar criação da viagem
                    </Button> 
                </form>
            </div>
        </div>
    )
}