"use client"

import React, { useEffect, useState } from "react"
import { SearchContext } from "../contexts/search-context";
import { DataContext } from "../contexts/data-context";
import OptionsList from "./options/options-list";
import { Data } from "../utils/data";
import Link from "next/link";
import Image from "next/image";
import TRIANGLE from "@/public/triangle.svg"
import EXIT from "@/public/exit.png"

type StackItem = {
    element:JSX.Element;
    title:string;
};

export default function ViewSwitcher({ data }:{ data:any }) {
    const [pagePath, setPagePath] = useState<StackItem[]>([{ element: <OptionsList />, title:">" }]);

    const setPage = (nextPage:JSX.Element, title:string) => {
        const newStackItem: StackItem = {
            element: nextPage,
            title: title
        }
        if (newStackItem.element && newStackItem.title)
            setPagePath([...pagePath, newStackItem]);
    };

    const returnToPage = (id:number) => {
        if (id < 0 || id > pagePath.length-2)
            return;
        const page = pagePath[id];
        setPagePath(pagePath.slice(0, id+1));
    };

    const returnToLastPage = () => {
        if (pagePath.length > 1)
            setPagePath(pagePath.slice(0, -1));
    };

    return (
        <div className="p-2 flex flex-col items-center">
            {/* Nav bar */}
            {/* <div className="flex gap-4 p-2">
                {pagePath.map((p:StackItem, key:number) => {
                    return <button className="px-4 py-2 rounded-md border-2 border-black" onClick={() => { returnToPage(key) }} key={key}>{p.title}</button>
                })}
            </div> */}
            {/* Main */}
            <SearchContext.Provider value={{ setPage }}>
                <DataContext.Provider value={new Data(data)}>
                    <div className="w-full flex flex-col items-center pb-10">
                        {pagePath.at(-1)?.element}
                    </div>
                </DataContext.Provider>
            </SearchContext.Provider>
            {/* Bottom nav bar */}
            <div className="flex justify-around self-start w-full gap-4 p-2 fixed bottom-0 left-0 right-0 bg-white">
                <button className="px-4 py-2 flex items-center gap-4" onClick={() => { returnToLastPage() }}>
                    <Image src={TRIANGLE} width={15} height={15} alt="ícone voltar"/>
                    {"Voltar"}
                </button>
                <Link className="px-4 py-2 flex items-center gap-4" href="/">
                    {"Sair"}
                    <Image src={EXIT} width={25} height={25} alt="ícone sair"/>
                </Link>
            </div>
        </div>
    )
}
  