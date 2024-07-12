import { useState } from 'react';

import { GuestModal } from './GuestModal';
import { ConfirmTripModal } from './ConfirmTripModal';
import { DestinationAndDateStep } from './steps/destination-and-date-step';
import { InviteGuestsStep } from './steps/invite-guests-step';

export function CreateTripPage() {

  const [ isGuestInputOpen, setIsGuestInputOpen ] = useState(false);
  const [ isGuestModalOpen, setIsGuestModalOpen ] = useState(false);
  const [ isConfirmTripModalOpen, setIsConfirmTripModalOpen ] = useState(false);
  const [ emailsToInvite, setEmailsToInvite ] = useState([
    'joao@rocketseat.com'
  ]);


  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function openGuestModal(){
    setIsGuestModalOpen(true);
  }

  function closeGuestModal(){
    setIsGuestModalOpen(false);
  }

  function openConfirmTripModal(){
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal(){
    setIsConfirmTripModalOpen(false);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">

        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>

            <DestinationAndDateStep
                closeGuestInput={closeGuestInput}
                openGuestInput={openGuestInput}
                isGuestInputOpen={isGuestInputOpen}
            />

          {isGuestInputOpen && (
            <InviteGuestsStep 
                emailsToInvite={emailsToInvite}
                openGuestModal={openGuestModal}
                openConfirmTripModal={openConfirmTripModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.
        </p>
      </div>
      {isGuestModalOpen && (
        <GuestModal 
            close={closeGuestModal} 
            guestList={emailsToInvite} 
            setGuestList={setEmailsToInvite} 
        />
       )}
      
      {isConfirmTripModalOpen && <ConfirmTripModal close={closeConfirmTripModal}/>}
      

    </div>
  )
}

