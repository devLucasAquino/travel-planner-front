import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ActivityDetailModal } from './activity-details-modal';

interface Activity{
    date: string,
    activities: {
        id: string,
        title: string,
        occours_at: string,
    }[]
}

export function Activities(){
    const { tripId } = useParams();
    const [ activities, setActivities ] = useState<Activity[]>([]);
    const [ activitySelectedId, setActivitySelectedId ] = useState('');
    const [ activityDetailsOpen, setActivityDetailsOpen ] = useState(false);

    useEffect(() => {
        api.get(`/trips/${tripId}/activities`)
        .then(response => 
            setActivities(response.data.activities)
        )
    }, [tripId])

    function openActivityDetails(activityId: string){
        setActivityDetailsOpen(true);
        setActivitySelectedId(activityId)
    }

    function closeActivityDetails(){
        setActivityDetailsOpen(false);
    }
    
    return(
        <div className="space-y-8">

            {activities.map(category => {
                return(
                    <div key={category.date} className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-xl text-zinc-300 font-semibold">Dia {format(category.date, 'd')}</span>
                            <span className="text-xs text-zinc-500">{format(category.date, 'EEEE', { locale: ptBR })}</span>
                        </div>
                        {category.activities.length > 0 ?(
                            <div>
                                {category.activities.map( activity => {

                                    return(
                                        <div key={activity.id} className="space-y-2.5">
                                            <button onClick={() => openActivityDetails(activity.id)} className="w-full px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3 ">
                                                <CircleCheck className="size-5 text-lime-300"/>
                                                <span className="text-zinc-100">{activity.title}</span>
                                                <span className="text-zinc-400 text-sm ml-auto">
                                                    {format(activity.occours_at, 'HH:mm')}h
                                                </span>
                                             </button>
                                        </div>
                                    )

                                    

                                })}
                            </div>
                        ) : (
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada neste data.</p>
                        )}
                    </div>
                )
            })}

                                    {activityDetailsOpen && (
                                        <ActivityDetailModal 
                                            closeActivityDetails={closeActivityDetails}
                                            activitySelectedId={activitySelectedId}
                                        />
                                    )}

        </div>
    )
}