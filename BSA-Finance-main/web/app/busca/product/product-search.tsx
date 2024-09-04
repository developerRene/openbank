import { useContext, useState } from "react";
import { SearchContext } from "../../contexts/search-context";
import ProductResult from "./product-result";
import { DataContext } from "@/app/contexts/data-context";
import { Data } from "@/app/utils/data";
import { Info } from "@/app/interface/info";
import Image from "next/image";

export default function ProductSearch() {
    const { setPage } = useContext(SearchContext);
    const data = useContext<Data>(DataContext);
    
    const [products] = useState<string[]>(Array.from(new Set(
        data.map(({ type }:Info) => type)
    )));

    const handleCardClick = (product:string) => {
        setPage(<ProductResult data={data.groupByProduct(product)} />, product);
    }

    return (
        <div className="w-5/6">
            <div className="flex items-center justify-center gap-4 text-3xl font-bold">
                Por produto
                <Image src={"/product.png"} width={75} height={75} alt={"logo"} />
            </div>
            <div className="grid justify-items-center p-2 gap-4">
                {products.map((product:string, i:number) => {
                    return <button className="bg-blue-500 px-4 py-2 rounded-md w-full text-center break-all" onClick={() => handleCardClick(product)} key={i}>
                        {product}
                    </button>
                })}
            </div>
        </div>
    )
}
  