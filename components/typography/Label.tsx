import { cn } from "@/utilities/cn";
interface Props {
  children: React.ReactNode | string | Array<React.ReactNode | string>;
  htmlFor?: string;
  className?: string;
}

export default function Label({ children, htmlFor, className }: Props) {
  return (
    <label
      className={cn("block text-light-200 text-sm font-medium", className)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
