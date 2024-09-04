import React, { useContext } from "react"
import ProductSearch from "../product/product-search"
import BankSearch from "../bank/bank-search"
import { SearchContext } from "../../contexts/search-context";
import Image from "next/image";

import PRODUCTS from "@/public/product.png"
import BANKS from "@/public/bank.png"
import COMPARISON from "@/public/comparison.png"

const buttonStyle = "px-4 py-2 rounded-md flex items-center"

export default function OptionsList() {
    const { setPage } = useContext(SearchContext);
    
    return (
        <div className="">
            <div className="grid gap-4 p-2 text-blue-700">
                <button className={buttonStyle} onClick={() => { setPage(<ProductSearch />, "Buscar Produto") }}>
                    <Image className="m-4" src={PRODUCTS} width={100} height={100} alt={"logo"} />
                    <div className="m-4 flex items-center justify-start">
                        Por produto
                    </div>
                </button>
                <button className={buttonStyle} onClick={() => { setPage(<BankSearch />, "Buscar Banco") }}>
                    <Image className="m-4" src={BANKS} width={100} height={100} alt={"logo"} />
                    <div className="m-4 flex items-center justify-start">
                        Por banco
                    </div>
                </button>
            </div>
        </div>
    )
}
  