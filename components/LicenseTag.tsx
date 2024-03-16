import { IdentificationCard } from "@phosphor-icons/react";
type License = "R" | "C" | "B" | "A" | "S";
import { cn } from "@/utilities/cn";
interface Props {
  license: License;
}
export default function LicenseTag({ license }: Props) {
  return (
    <div
      className={cn(
        "flex flex-row items-center rounded-full rounded-md shadow border font-bold px-2 py-0 w-fit text-sm",
        {
          "bg-primary-400/[0.2] border-primary-500 text-primary-500": license === "R",
          "bg-orange-400/[0.2] border-orange-500 text-orange-500": license === "C",
          "bg-yellow-400/[0.2] border-yellow-500 text-yellow-500": license === "B",
          "bg-green-400/[0.2] border-green-500 text-green-500": license === "A",
          "bg-fuchsia-500/[0.2] border-fuchsia-600 text-fuchsia-500": license === "S",
        }
      )}
    >
      <IdentificationCard size="1.2em" weight="fill" className="mr-1" />
      {license}
    </div>
  );
}
