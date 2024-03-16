import React, { useState, useMemo, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CaretUpDown, Check } from "@phosphor-icons/react";
import { cn } from "@/utilities/cn";
interface Props extends React.ComponentPropsWithoutRef<typeof Combobox> {
  options: Array<{ label: string; value: string }>;
  label?: string;
  disabled?: boolean;
  value: any;
  onChange: (value: string) => void;
  placeholder?: string;
  renderOption?: ({
    option,
    selected,
  }: {
    option: { label: string; value: string };
    selected: boolean;
  }) => React.ReactNode;
  width?: "xs" | "sm" | "md" | "lg" | "full";
  containerClassName?: string;
  labelClassName?: string;
}

export default function AutoComplete({
  value,
  options,
  onChange,
  label,
  disabled,
  containerClassName,
  labelClassName,
}: Props) {
  const [query, setQuery] = useState("");

  const filteredOptions = useMemo(() => {
    if (query === "") return options;
    return options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()));
  }, [options, query]);

  return (
    <div className={cn("w-full max-w-md mb-2", containerClassName)}>
      {label && (
        <span className="flex flex-row items-center mb-1">
          <label
            className={cn("block text-light-200 text-sm font-medium", disabled && "text-light-500", labelClassName)}
          >
            {label}
          </label>
        </span>
      )}
      <Combobox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-md text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300">
            <Combobox.Input
              className={cn(
                "appearance-none bg-elevation-4 rounded-md placeholder-light-300 border-light-400 border w-full",
                disabled && "bg-elevation-3 border-light-500",
                "focus:bg-elevation-5 focus:ring-light-300 focus:border-light-300 ring-offset-0 focus:outline-none focus:shadow-md",
                "py-1.5 pr-4 pl-2"
              )}
              displayValue={(option: { label: string; value: string }) => option.label}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <CaretUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 z-[100] w-full overflow-auto rounded-md bg-elevation-2 py-1  shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredOptions.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-light-400">Nothing found.</div>
              ) : (
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option.value}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "text-light-200 bg-elevation-3" : "text-light-300"
                      }`
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium text-light-100" : "font-normal text-light-300"
                          }`}
                        >
                          {option.label}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-success-400"
                            }`}
                          >
                            <Check className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
