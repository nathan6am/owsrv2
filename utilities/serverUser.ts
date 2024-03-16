import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient, type User } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
export const getUserFromContext = async (): Promise<User | null> => {
  const supabaseServerClient = createRouteHandlerClient({ cookies });
  const {
    data: { user },
  } = await supabaseServerClient.auth.getUser();
  return user;
};
