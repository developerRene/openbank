import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/search-context";
import BankResult from "./bank-result";
import { DataContext } from "@/app/contexts/data-context";
import Image from "next/image";
import { Data } from "@/app/utils/data";

type BankInfo = {
  name:string
  logo:string
}

export default function BankSearch() {
  const { setPage } = useContext(SearchContext);
  const data = useContext<Data>(DataContext);
  const [banks, setBanks] = useState<BankInfo[]>([]);

  useEffect(() => {
    console.log(data)
    let aux: BankInfo[] = [];
    for (let d of data.items) {
      if (!aux.find((b) => b.name === d.companyName && b.logo === d.logo)) {
        aux.push({
          name: d.companyName,
          logo: d.logo
        });
      }
    }
    setBanks(aux);
  }, []);

  const handleCardClick = (bank:string) => {
    setPage(<BankResult data={data.groupByBank(bank)} />, bank);
  }

  return (
    <div className="w-5/6">
      <div className="flex items-center justify-center gap-4 text-3xl font-bold">
        Por banco
        <Image src={"/bank.png"} width={75} height={75} alt={"logo"} />
      </div>
      <div className="grid justify-items-center p-2 gap-4">
        {banks.map((bank:BankInfo, i:number) => {          
          return <button className="bg-blue-500 px-4 py-2 rounded-md w-full text-center break-all flex items-center gap-4" onClick={() => handleCardClick(bank.name)} key={i}>
            <Image src={`/logos/${bank.logo}.svg`} className="rounded" width={100} height={100} alt={"logo"} />
            {bank.name}
          </button>
        })}
      </div>
    </div>
  )
}
