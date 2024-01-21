"use client";
import React from "react";
import SearchManutfacurer from "./SearchManutfacurer";
import Image from "@/node_modules/next/image";
import { useState } from "react";
import { useRouter } from "@/node_modules/next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt={"magnifying glass"}
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const router = useRouter();
  const [manufacurer, setManutfacurer] = useState("");
  const [model, setModel] = useState("");
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacurer === '' && model === '') {
      return alert('Please fill in the search bar');
    }

    updateSearchParams(model.toLowerCase(), manufacurer.toLowerCase())

  };

  const updateSearchParams = (model: string, manufacurer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set('model', model);
    } else {
      searchParams.delete('model');
    }

    if (manufacurer) {
      searchParams.set('manufacurer', manufacurer);
    } else {
      searchParams.delete('manufacurer');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManutfacurer
          manufacurer={manufacurer}
          setManutfacurer={setManutfacurer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          placeholder="Tiguan..."
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
