"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const handleSignIn = async () => {
    supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: "http://localhost:3000/api/auth/callback",
      },
    });
  };
  return (
    <div>
      <button
        onClick={() => {
          handleSignIn();
        }}
      >
        Sign in
      </button>
    </div>
  );
}
