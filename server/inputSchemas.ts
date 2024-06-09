import { z } from "zod";

export const createProfileInput = z.object({
  firstName: z.string(),
  lastName: z.string(),
  driverCode: z.string(),
  country: z.string(),
  iRacingID: z.string().optional(),
  steamID: z.string().optional(),
  bio: z.string().optional(),
  streamLink: z.string().optional(),
});

export const updateProfileInput = createProfileInput.partial();
