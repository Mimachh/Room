import { useSession } from "next-auth/react";

export const useCurrentUser = () => {
  const session = useSession();

  return session.data?.user;
};

export const isCurrentUserLoading = () => {
  const session = useSession();

  return session.status === "loading";
}

export const isCurrentUserLoaded = () => {
  const session = useSession();

  return session.status === "authenticated";
}