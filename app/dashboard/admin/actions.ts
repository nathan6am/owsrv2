"use server";

import { createClient } from "@/app/lib/supabase/server";

export async function uploadImage(formData: FormData) {
    const file = formData.get("file") as File
  const supabase = createClient();
  const res = await supabase.auth.getUser();
  console.log(res);
  const { data, error } = await supabase.storage.from("event-images").upload(file.name, file);
  return { data, error };
}