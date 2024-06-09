"use client";
import { useForm, Controller } from "react-hook-form";
import { Input, Button } from "@/components/base";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CountrySelect from "./CountrySelect";
import { trpc } from "../_trpc/client";

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

const schema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  driverCode: Yup.string()
    .required("Driver Code is required")
    .min(3, "Driver Code must be exactly 3 characters")
    .max(3, "Driver Code must exactly 3 characters"),
  country: Yup.string().required("Country is required"),
  iRacingID: Yup.string(),
  steamID: Yup.string(),
  bio: Yup.string(),
  streamLink: Yup.string(),
});

export default function Signup() {
  const { register, handleSubmit, control, formState } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;
  const { mutate } = trpc.createProfile.useMutation();
  const onSubmit = handleSubmit(async (data) => {
    const profile = mutate(data);
    console.log(profile);
  });

  return (
    <form onSubmit={onSubmit}>
      <Input label="First Name" {...register("firstName")} errorText={errors.firstName?.message} />
      <Input label="Last Name" {...register("lastName")} errorText={errors.lastName?.message} />
      <Input
        label="3-Letter Driver Code"
        placeholder="e.g. VER"
        {...register("driverCode")}
        errorText={errors.driverCode?.message}
      />
      <Input label="iRacing ID" {...register("iRacingID")} />
      <Input label="Steam ID" {...register("steamID")} />
      <Input label="Bio" optional {...register("bio")} />
      <Controller
        name="country"
        control={control}
        render={({ field }) => <CountrySelect value={field.value} onChange={field.onChange} />}
      />
      <Input label="Stream Link" optional {...register("streamLink")} />
      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
}
