import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "@/app/api/trpc/[trpc]/route";
const t = initTRPC.context<Context>().create();

export const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to do that",
    });
  }
  return next({
    ctx: {
      // infer the user as non-null
      user: ctx.user,
    },
  });
});

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
export const authedProcedure = publicProcedure.use(isAuthed);
