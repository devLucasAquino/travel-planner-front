import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { Calendar, MapPin, Pencil, X } from "lucide-react";

interface Activity{
    id: string,
    title: string,
    occours_at: string,
}

interface ActivityDetailsModalProps{
    activitySelectedId: string,
    closeActivityDetails: () => void,
}

export function ActivityDetailModal({
    activitySelectedId,
    closeActivityDetails,
}:ActivityDetailsModalProps){
    const [ activity, setActivity ] = useState<Activity | undefined>();
    const { tripId } = useParams();

    const [ stateUpdateActivity, setStateUpdateActivity ] = useState(false);
    const [ updateActivity, setUpdateActivity ] = useState('')

    useEffect(() => {
        api.get(`/trips/${tripId}/activities/${activitySelectedId}`)
        .then(response => {
            setActivity(response.data.activity)
            setUpdateActivity(response.data.activity.title)
        }

        )
    }, [activitySelectedId])

    function openStateUpdateActivity(){
        setStateUpdateActivity(true)
    }


    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            
            <div  className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">

                <div className='space-y-2'>
                    <div className="flex items-center justify-between">
                        <h2 className='text-lg font-semibold'>Atividade</h2>
                        <div className="flex items-center gap-5">
                            <button>
                                <Pencil onClick={openStateUpdateActivity} className="size-4 text-zinc-400 hover:text-zinc-300 hover:size-5" />
                            </button>
                            <button>
                                <X onClick={closeActivityDetails} className='size-5 text-zinc-400 hover:text-zinc-300'/>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                        <MapPin className='text-zinc-400 size-5'/>
                        <input 
                            className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none"
                            value={updateActivity}
                            disabled={!stateUpdateActivity}
                            onChange={event => setUpdateActivity(event.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className='flex-1 h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                            <Calendar className='text-zinc-400 size-5'/>
                            <input 
                                type="datetime" 
                                className="bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none"
                                value={activity?.occours_at}
                            />
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>
    )
}