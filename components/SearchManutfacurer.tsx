"use client";
import { SearchManutfacurerProps } from "@/types/index";
import React from "react";
import {
  Combobox,
  Transition,
} from "@/node_modules/@headlessui/react/dist/index";
import Image from "@/node_modules/next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants/index";

const SearchManutfacurer = ({
  manufacurer,
  setManutfacurer,
}: SearchManutfacurerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, " ")
            .includes(query.toLowerCase().replace(/\s+/g, " "))
        );


  return (
    <div className="search-manufacturer">
      <Combobox value={manufacurer} onChange={setManutfacurer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacurer: string) => manufacurer}
            onChange={(e) => {
              // console.log(e.target.value);
              setQuery(e.target.value);
            }}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item, index) => (
                <Combobox.Option
                  key={index}
                  value={item}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "to-gray-500"
                    }`
                  }
                >
                   {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManutfacurer;
