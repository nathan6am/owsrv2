import { publicProcedure, router, middleware, authedProcedure } from "./trpc";
import prisma from "./createClient";
import { z } from "zod";
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
  createProfile: authedProcedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        driverCode: z.string(),
        country: z.string(),
        iRacingID: z.string().optional(),
        steamID: z.string().optional(),
        bio: z.string().optional(),
        streamLink: z.string().optional(),
      })
    )
    .mutation(async (opts) => {
      const user = opts.ctx.user;
      const userID = user.id;
      const profile = await prisma.profile.create({
        data: {
          firstName: opts.input.firstName,
          lastName: opts.input.lastName,
          driverCode: opts.input.driverCode,
          country: opts.input.country,
          iRacingID: opts.input.iRacingID,
          steamID: opts.input.steamID,
          bio: opts.input.bio,
          streamLink: opts.input.streamLink,
          id: userID,
          userID: userID,
          discordID: user.user_metadata.provider_id,
        },
      });
      return profile;
    }),
  getAuthedTodos: authedProcedure.query(async () => {
    return [10, 20, 30];
  }),
  getMe: authedProcedure.query(async ({ ctx }) => {
    return ctx.user;
  }),
});

export type AppRouter = typeof appRouter;
