import { useState } from "react";
import Image from "next/image";

export default function ProductResult({ data }:{ data:any }) {
    return (
        <div>
            <h1 className="font-bold">{data[0].type}</h1>
            <table className="table-auto border-collapse w-full">
                <tbody>
                    {data.map((d:any, key:number) => {
                        // this if is a temporary solution
                        // ideally, every bank should have a logo
                        let logo = "/szdgfj.png"
                        if (!d.logo.match(/^https:\/\/*/)) {
                            logo = `/logos/${d.logo}.svg`
                        }
                        
                        return <tr className="odd:bg-gray-100" key={key}>
                            <td className="border px-4 py-2 flex items-center gap-4 text-xs md:text-base">
                                <Image src={logo} width={50} height={50} alt={"logo"} className="rounded"/>
                                {d.companyName}
                            </td>
                            <td className="border px-4 py-2 text-xs md:text-base">{(d.avg * 100).toFixed(2)}%</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <p>* Valores atualizados até xx/xx/xxxx</p>
            <p>** Todas as taxas são calculadas ao mês</p>
        </div>
    )
}
  