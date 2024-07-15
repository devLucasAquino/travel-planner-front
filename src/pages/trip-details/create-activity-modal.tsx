import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { FormEvent } from "react";

interface CreateActivityModalProps{
    closeCreateActivityModal: () => void;
}


export function CreateActivityModal({
    closeCreateActivityModal
}: CreateActivityModalProps){
    
    const { tripId } = useParams();

    const url = `/trips/${tripId}/activities`;
    
    async function createActivity(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        
        const data = new FormData(event.currentTarget)

        const title = data.get('title')?.toString();
        const occours_at = data.get('occurs_at')?.toString();

        await api.post( url , {
            title, 
            occours_at
        })

        window.document.location.reload();
    }

    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                    <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                        <div className='space-y-2'>
                            <div className="flex items-center justify-between">
                                <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
                                <button onClick={closeCreateActivityModal}>
                                    <X className='size-5 text-zinc-400'/>
                                </button>
                            </div>
                            <p className='text-zinc-400 text-sm'>
                                Todos convidados podem visualizar as atividades.
                            </p>
                        </div>
        
                        <form onSubmit={createActivity} className='space-y-3'>
                            <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                                <Tag className='text-zinc-400 size-5'/>
                                <input 
                                name='title' 
                                placeholder="Qual a atividade?"  
                                className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none" 
                                />
                            </div>

                            <div className="flex items-center gap-2">
                                <div className='flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                                <Calendar className='text-zinc-400 size-5'/>
                                <input 
                                    type="datetime-local" 
                                    name='occurs_at' 
                                    placeholder="Data e hora"  
                                    className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none" 
                                />
                                </div>
                            </div>

                            <Button variant="primary" size="full" type="submit"> {/* Adicionando type="submit" para o botão de salvar */}
                                Salvar atividade
                            </Button>
                        </form>
                    </div>
                </div>
    )
}