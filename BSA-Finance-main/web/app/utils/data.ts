import { Info } from "../interface/info";

// a group of Info with a few methods to group them
export class Data {
    
    items: Info[];

    constructor(items = []) {
        this.items = items;
    }

    get length() {
        return this.items.length;
    }

    push(item: Info) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    get(index: number) {
        if (index >= 0 && index < this.length) {
            return this.items[index];
        }
        return undefined;
    }

    // set(index:number, value:Info) {
    //     if (index >= 0 && index < this.length) {
    //         this.items[index] = value;
    //     }
    // }

    groupByBank(bank:string) {
        return this.items.filter((d:any) => d.companyName === bank);
    }

    groupByProduct(product:string) {
        return this.items.filter((d:any) => d.type === product);
    }

    map(method:(a:Info) => any) {
        return this.items.map(method);
    }

}