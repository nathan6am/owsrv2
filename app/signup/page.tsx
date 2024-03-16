"use client";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@/components/UIKit";
import * as z from "zod";
import CountrySelect from "./CountrySelect";
interface FormValues {
  firstName: string;
  lastName: string;
  driverCode: string;
  country: string;
  iRacingID?: string;
  steamID?: string;
  bio?: string;
  streamLink?: string;
}

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  driverCode: z
    .string()
    .min(3, { message: "Driver code must be 3 characters long" })
    .max(3, { message: "Driver code must be 3 characters long" }),
  country: z.string(),
  iRacingID: z.string().optional(),
  steamID: z.string().optional(),
  bio: z.string().optional(),
  streamLink: z.string().optional(),
});

export default function Signup() {
  const { register, handleSubmit, control } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input label="First Name" {...register("firstName")} />
      <Input label="Last Name" {...register("lastName")} />
      <Input label="Driver Code" {...register("driverCode")} />
      <Input label="iRacing ID" {...register("iRacingID")} />
      <Input label="Steam ID" {...register("steamID")} />
      <Input label="Bio" {...register("bio")} />
      <Controller
        name="country"
        control={control}
        render={({ field }) => <CountrySelect value={field.value} onChange={field.onChange} />}
      />
      <Input label="Stream Link" {...register("streamLink")} />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
