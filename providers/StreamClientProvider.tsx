"use client"
import { tokenProvider } from "@/actions/stream-actions";
import Loader from "@/components/Loader";
import { isCurrentUserLoaded, isCurrentUserLoading, useCurrentUser } from "@/hooks/use-current-user";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({children}: {children: ReactNode}) => {
  
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();

  const user = useCurrentUser();
  const isAuthenticated = isCurrentUserLoaded();
  useEffect(() => {
    if(!user || !isAuthenticated) return;
    if(!apiKey) throw new Error("Stream API key is missing");

    const client = new StreamVideoClient({
        apiKey,
        user: {
            id: user?.id,
            name: user?.name || user?.id,
            image: user?.image || undefined,
        },
        tokenProvider
    })
    setVideoClient(client);
  }, [user, isAuthenticated]);

  if(!videoClient) return <Loader />

    return (
        <StreamVideo client={videoClient}>
        {children}
      </StreamVideo>
    );
};

export default StreamVideoProvider;
