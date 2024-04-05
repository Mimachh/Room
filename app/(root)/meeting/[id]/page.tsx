"use client";

import Loader from "@/components/Loader";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { isCurrentUserLoaded, useCurrentUser } from "@/hooks/use-current-user";
import { useGetCallById } from "@/hooks/use-get-call-by-id";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params: {id} }: { params: { id: string } }) => {
  const user = useCurrentUser();
  const isAuthenticated = isCurrentUserLoaded()
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const {call, isCallLoading} = useGetCallById(id);

  if(!isAuthenticated || isCallLoading) return <Loader />
  return (
    <main className="w-full primary-radial">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? 
          <MeetingSetup setIsSetupComplete={setIsSetupComplete} /> 
          : 
          <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
