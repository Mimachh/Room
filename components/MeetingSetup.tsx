"use client"
import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

interface Props {
    setIsSetupComplete: (value: boolean) => void

}
const MeetingSetup = (props: Props) => {
    const { setIsSetupComplete } = props
    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false)
  
    const call = useCall();
    if(!call) {
        throw new Error('Call must be used within a StreamCall component')
    }
    useEffect(() => {
        if(isMicCamToggledOn) {
            call?.camera?.disable();
            call?.microphone?.disable();
        } else {
            call?.camera?.enable();
            call?.microphone?.enable();
        }
    }, [isMicCamToggledOn, call?.camera, call?.microphone])
    return (
    <div className='flex min-h-screen md:py-12 w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>Setup</h1>
        <VideoPreview />
        <div className='flex h-16 items-center justify-center gap-3'>
            <label htmlFor="mic-cam-toggle"
            className='flex items-center justify-center gap-2 font-medium'
            >
                <input 
                id='mic-cam-toggle'
                type="checkbox"
                checked={isMicCamToggledOn}
                onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
                />
                Join with mic and camera off
            </label>
            <DeviceSettings />
        </div>
        <Button 
        onClick={() => {
            call.join()
            setIsSetupComplete(true)
        }}
        className='rounded-md bg-green-500 px-4 py2.5'>
            Join meeting
        </Button>
    </div>
  )
}

export default MeetingSetup