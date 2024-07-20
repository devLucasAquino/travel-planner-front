import { useParams } from "react-router-dom";
import { Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../components/button";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import { DateRange, DayPicker } from "react-day-picker";

interface Trip{
    id: string,
    destination: string,
    ends_at: string,
    starts_at: string,
    is_confirmed: boolean,
}

export function DestinationAndDateHeader(){

    const { tripId } = useParams();
    const [ trip, setTrip ] = useState<Trip | undefined>();

    const [ updateDestination, setUpdateDestination ] = useState('');
    const [ updateStartAndEndDate, setUpdateStartAndEndDate ] = useState<DateRange | undefined>();
    const [ isDatePickerOpen, setIsDatePickerOpen ] = useState(false);
    const [ openUpdateDestination, setOpenUpdateDestination ] = useState(false);

    useEffect(() => {
        api.get(`/trips/${tripId}`).then(response => {
            setTrip(response.data.trip)
            setUpdateDestination(response.data.trip.destination)
        })
    }, [tripId])

    const displayedDate = trip
    ? format(trip.starts_at, "d ' de ' LLL").concat(' até ').concat(format(trip.ends_at, "d ' de ' LLL")) 
    : null

 
    function activeUpdateDestination(){
        setOpenUpdateDestination(true);
    }

    function openDatePicker(){
        setIsDatePickerOpen(true);
    }
    
     function closeDatePicker(){
        console.log(updateStartAndEndDate?.from)
        setIsDatePickerOpen(false);
    }

    function recordChange(){

        const updatedData = {
            destination: updateDestination,
            starts_at: updateStartAndEndDate?.from,
            ends_at: updateStartAndEndDate?.to,
        };

        api.put(`/trips/${tripId}`, updatedData)
        .then(response => {
            console.log('alteração bem sucedida!', response.data.trip)
            setOpenUpdateDestination(false);

            window.document.location.reload();
        })
    }


    return(
            <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
                
                <div className="flex items-center gap-2">
                    <MapPin className="size-5 text-zinc-400"/>
                    <input
                        className="text-lg text-zinc-100 bg-transparent outline-none" 
                        value={updateDestination}
                        disabled={!openUpdateDestination}
                        onChange={event => setUpdateDestination(event.target.value)}
                    />
                </div>

                <div className="flex items-center gap-5">
                    <button disabled={!openUpdateDestination} onClick={openDatePicker} className="flex items-center gap-2">
                        <Calendar className="size-5 text-zinc-400"/>
                        <span className="text-zinc-100">{displayedDate}</span>
                    </button>

                    {isDatePickerOpen && (
                        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                            <div className="rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
                            <div className='space-y-2'>
                                <div className="flex items-center justify-between">
                                    <h2 className='text-lg font-semibold'>Selecione a data</h2>
                                    <button onClick={closeDatePicker}>
                                        <X className='size-5 text-zinc-400'/>
                                    </button>
                                </div>
                            </div>
            
                            <DayPicker mode="range" selected={updateStartAndEndDate} onSelect={setUpdateStartAndEndDate}/>
                            </div>
                        </div>
                    )}

                    <div className='w-px h-6 bg-zinc-800'/>

                    {openUpdateDestination?(
                        <Button onClick={recordChange} variant="primary">
                            Salvar
                        </Button>
                    ):(
                        <Button onClick={activeUpdateDestination} variant="secondary">
                            Alterar local/data
                            <Settings2 className='size-5'/>
                        </Button>
                    )}
                </div>
            </div>
    )
}