"use client";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useCallback, useMemo } from "react";
import {
  MdExpandMore,
  MdCheckBoxOutlineBlank,
  MdOutlineIndeterminateCheckBox,
  MdClose,
} from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { cn } from "@/utilities/cn";
import Label from "../typography/Label";

interface MultiSelectProps<T> {
  label?: string;
  options: Array<{ label: string; value: any }>;
  value: any[];
  onChange: (arg: any) => void;
  placeholder?: string;
  width?: "xs" | "sm" | "md" | "lg" | "full";
  showCheckAll?: boolean;
  renderLabel?: ({
    option,
    selected,
  }: {
    option: { label: string; value: T };
    selected: boolean;
  }) => React.ReactNode;
}

export default function MultiSelect<T extends any>({
  label,
  options,
  value,
  onChange,
  showCheckAll,
  placeholder,
  renderLabel,
}: MultiSelectProps<T>) {
  const allSelected = useMemo(
    () => options.every((option) => value.includes(option.value)),
    [value, options]
  );
  const toggleAll = useCallback(() => {
    if (allSelected) {
      onChange([]);
    } else {
      onChange(options.map((option) => option.value));
    }
  }, [allSelected, onChange, options]);
  return (
    <Listbox
      multiple
      value={value}
      onChange={(val) => {
        if (val.includes("selectall")) {
          toggleAll();
        } else {
          onChange(val);
        }
      }}
    >
      <div className="relative mt-1 max-w-xs shrink-0 grow w-full">
        <Label className="mb-1">{label}</Label>
        <Listbox.Button className="relative w-full cursor-default rounded-md bg-elevation-4 hover:bg-elevation-5 text-sm py-2 pl-3 pr-10 text-left border border-light-500 shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ">
          {({ open }) => (
            <>
              {value.length > 0 ? (
                <div className="flex flex-row items-center">
                  <a
                    className="py-0 rounded-full text-sm bg-primary-400 inline px-1 pl-2 mr-2 cursor-pointer hover:bg-primary-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      onChange([]);
                    }}
                  >
                    {value.length}
                    <MdClose className="inline mb-0.5 ml-1 text-md" />
                  </a>
                  <span className="block truncate text-light-200 pr-12">
                    Options Selected
                  </span>
                </div>
              ) : (
                <span className="block truncate italic text-light-300">
                  {placeholder}
                </span>
              )}

              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <MdExpandMore
                  className={cn(
                    "h-5 w-5 text-light-400 transition-all duration-400",
                    {
                      "rotate-180": open,
                      "rotate-0": !open,
                    }
                  )}
                  aria-hidden="true"
                />
              </span>
            </>
          )}
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-2 max-h-60 w-fit min-w-[20em] overflow-auto rounded-md z-[20] bg-elevation-4 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {showCheckAll && (
              <Listbox.Option
                key="all"
                value="selectall"
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 border-b border-light-500 font-bold ${
                    active ? "bg-elevation-5 text-light-200" : "text-light-300"
                  }`
                }
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-light-400">
                  {allSelected ? (
                    <IoMdCheckboxOutline
                      size="1.4em"
                      className="text-primary-400"
                    />
                  ) : (
                    <>
                      {value.length > 0 ? (
                        <MdOutlineIndeterminateCheckBox
                          className="text-primary-400"
                          size="1.4em"
                        />
                      ) : (
                        <MdCheckBoxOutlineBlank size="1.4em" />
                      )}
                    </>
                  )}
                </span>
                {`Select All`}
              </Listbox.Option>
            )}
            {options.map((option, idx) => (
              <Listbox.Option
                key={option.label}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-elevation-5 text-light-200" : "text-light-300"
                  }`
                }
                value={option.value}
              >
                {({ selected }) => (
                  <>
                    {renderLabel ? (
                      renderLabel({ selected, option })
                    ) : (
                      <span
                        className={`block truncate ${
                          selected ? "text-light-200" : "font-normal"
                        }`}
                      >
                        {option.label}
                      </span>
                    )}
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
