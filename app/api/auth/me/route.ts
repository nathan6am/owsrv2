import { getUserFromContext } from "@/utilities/serverUser";

export async function GET() {
  const user = await getUserFromContext();
  return Response.json({ user });
}
