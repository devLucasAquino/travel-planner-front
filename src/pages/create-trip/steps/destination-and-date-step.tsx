import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns';

import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";

import { Button } from "../../../components/button";

import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps{
  isGuestInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
}

export function DestinationAndDateStep({
  isGuestInputOpen,
  closeGuestInput,
  openGuestInput
}: DestinationAndDateStepProps ){

  const [ isDatePickerOpen, setIsDatePickerOpen ] = useState(false);
  const [ eventStartAndEndDate, setEventStartAndEndDate ] = useState<DateRange | undefined>();


  function openDatePicker(){
    setIsDatePickerOpen(true);
  }

  function closeDatePicker(){
    setIsDatePickerOpen(false);
  }

  const displayedDate = eventStartAndEndDate && eventStartAndEndDate.from && eventStartAndEndDate.to
  ? format(eventStartAndEndDate.from, "d ' de ' LLL").concat(' até ').concat(format(eventStartAndEndDate.to, "d ' de ' LLL")) 
  : null 

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400'/>
              <input disabled={isGuestInputOpen} type="text" placeholder="Para onde você vai?"  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
            </div>
            <button onClick={openDatePicker} disabled={isGuestInputOpen} className='flex items-center gap-2 text-left w-[240px]'>
              <Calendar className='size-5 text-zinc-400'/>
              <span                 
                className="text-lg text-zinc-400 w-40 flex-1">
                {displayedDate || 'Quando?'}
              </span>
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
  
                  <DayPicker mode="range" selected={eventStartAndEndDate} onSelect={setEventStartAndEndDate } />
                </div>
              </div>
            )}

            <div className='w-px h-6 bg-zinc-800'/> 
            
            {isGuestInputOpen ? (
              <Button onClick={closeGuestInput} variant="secondary">
                Alterar local/data
                <Settings2 className='size-5'/>
              </Button>
            ) : (
              <Button onClick={openGuestInput} >
                Continuar
                <ArrowRight className='size-5'/>
              </Button> 
            )}
              
          </div>
    )
}