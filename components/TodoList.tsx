"use client";

import { trpc } from "@/app/_trpc/client";

export default function TodoList() {
  const getTodos = trpc.getTodos.useQuery();
  const { data, isLoading, error } = getTodos;
  return <div></div>;
}
