import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from "lucide-react";

export function TripDetailsPage(){
    return(
        <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400"/>
                    <span className="text-lg text-zinc-100">Florianopólis, Brasil</span>
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100">17 a 23 de Agosto</span>
                    </div>
                    <div className='w-px h-6 bg-zinc-800'/>

                    <button className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                        Alterar local/data
                        <Settings2 className='size-5'/>
                    </button>
                </div>




            </div>

            <main className="flex gap-16 px-4">

                <div className="flex-1 space-y-6">

                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold text-3xl">Atividades</h2>
                        <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>
                            <Plus className='size-5'/>
                            Cadastrar atividade
                        </button> 
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                                <span className="text-xs text-zinc-500">Sábado</span>
                            </div>
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada neste data.</p>
                        </div>

                        <div className="space-y-2.5">
                            <div className="flex gap-2 items-baseline">
                                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                                <span className="text-xs text-zinc-500">Domingo</span>
                            </div>
                           <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300"/>
                                    <span className="text-zinc-100">Academia em grupo</span>
                                    <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                                </div>
                           </div>
                           <div className="space-y-2.5">
                                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                    <CircleCheck className="size-5 text-lime-300"/>
                                    <span className="text-zinc-100">Corrida de Kart</span>
                                    <span className="text-zinc-400 text-sm ml-auto">14:00h</span>
                                </div>
                           </div>
                        </div>


                    </div>

                </div>


                <div className="w-80 space-y-6">
                    <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Links importantes</h2>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                                    https://www.airbnb.com.br/rooms/1047000112142124121241241
                                    </a>
                                </div>
                                <Link2 className="text-zinc-400 size-5 shrink-0"/>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Regras da casa</span>
                                    <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                                        https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000                                    
                                    </a>
                                </div>
                                <Link2 className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                        </div>

                        <button className='w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                            <Plus className='size-5'/>
                            Cadastrar novo link
                        </button>
                    </div>

                    <div className='w-full h-px bg-zinc-800'/>

                    <div>
                    <div className="space-y-6">
                        <h2 className="font-semibold text-xl">Convidados</h2>

                        <div className="space-y-5">
                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Jessica White</span>
                                    <span className="block text-sm text-zinc-400 truncate">
                                        jessica.white@yahoo.com
                                    </span>
                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="space-y-1.5">
                                    <span className="block font-medium text-zinc-100">Dr. Drauzio Spinozza</span>
                                    <span className="block text-sm text-zinc-400 truncate">
                                        drauzio@medicamentos.com
                                    </span>
                                </div>
                                <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                            </div>
                        </div>

                        <button className='w-full justify-center bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                            <UserCog className='size-5'/>
                            Gerenciar convidados
                        </button>
                    </div>
                    </div>
                </div>


            </main>
        </div>
    )
}