import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useCallback, useMemo } from "react";
import { MdExpandMore, MdCheckBoxOutlineBlank, MdOutlineIndeterminateCheckBox } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { cn } from "@/utilities/cn";
interface MultiSelectProps {
  label?: string;
  options: Array<{ name: string; value: any }>;
  value: any[];
  onChange: (arg: any) => void;
  placeholder?: string;
  width?: "xs" | "sm" | "md" | "lg" | "full";
  showCheckAll?: boolean;
}

export default function MultiSelect<T extends any>({
  label,
  options,
  value,
  onChange,
  showCheckAll,
}: MultiSelectProps) {
  const selected = useMemo(() => options.find((option) => option.value === value), [value, options]);
  const allSelected = useMemo(() => options.every((option) => value.includes(option.value)), [value, options]);
  const toggleAll = useCallback(() => {
    if (allSelected) {
      onChange([]);
    } else {
      onChange(options.map((option) => option.value));
    }
  }, [allSelected, onChange, options]);
  return (
    <Listbox multiple value={value} onChange={onChange}>
      <div className="relative mt-1 max-w-sm shrink-0 grow">
        <Listbox.Button className="relative w-full cursor-default rounded-md bg-elevation-4 hover:bg-elevation-5 text-sm py-2 pl-3 pr-10 text-left border border-light-500 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ">
          {({ open }) => (
            <>
              <span className="block truncate">{label}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <MdExpandMore
                  className={cn("h-5 w-5 text-light-400 transition-all duration-400", {
                    "rotate-180": open,
                    "rotate-0": !open,
                  })}
                  aria-hidden="true"
                />
              </span>
            </>
          )}
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute mt-2 max-h-60 w-fit overflow-auto rounded-md z-[20] bg-elevation-4 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {showCheckAll && (
              <li
                onClick={toggleAll}
                className="relative cursor-default w-full border-b border-light-500 select-none py-2 pl-10 pr-4 text-left text-light-200 font-bold hover:text-light-100 hover:bg-elevation-400"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-light-400">
                  {allSelected ? (
                    <MdOutlineIndeterminateCheckBox className="text-primary-400" size="1.4em" />
                  ) : (
                    <MdCheckBoxOutlineBlank size="1.4em" />
                  )}
                </span>
                {allSelected ? "Deselect All" : "Select All"}
              </li>
            )}
            {options.map((option, idx) => (
              <Listbox.Option
                key={option.name}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-elevation-5 text-light-200" : "text-light-300"
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "text-light-200" : "font-normal"}`}>
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-400">
                        <IoMdCheckboxOutline size="1.4em" />
                      </span>
                    ) : (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MdCheckBoxOutlineBlank size="1.4em" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
