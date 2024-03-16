import { trpc } from "@/app/_trpc/client";

export default function useCurrentUser() {
  const userQuery = trpc.getMe.useQuery();
  const currentUser = userQuery.data;
}
