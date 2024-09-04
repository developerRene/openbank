import { Info } from "../interface/info";

export class Caller {
    // calls backend API
    static async fetchData(e:string, s:string) {
        let result: Info[] = [];

        const url = "http://api:8000/";
        const data = await (await fetch(`${url}${e}-${s}`, { cache: "no-store" })).json(); 
    
        // for each url, call the API and rearrenge the data
        for (let d of data) {
            try {
                result.push(...this.processData(d));
            } catch (e) {
                // console.log(e);
                // console.log(`URL: ${p.url}`);
            }
        }
    
        return result.sort((a, b) => a.avg - b.avg);
    }

    // process the data returned by the backend API
    static processData(participant:{ url:string, logo:string, data:any }) {
        let result = []
        for (let d of participant.data["data"]) {
            for (let interestRate of (d["interestRates"] || d["interestRate"] || d["interest"]["rates"])) { // this need to be checked better
                // calculate avg
                let avg: number = 0;
                for (let interval of interestRate["applications"]) {
                    avg += interval.indexer.rate * interval.customers.rate;
                }

                if (avg <= 0.0001 || isNaN(avg)) continue;

                // rate type
                const rateType = (d["type"] || d["name"]) + `_${interestRate["referentialRateIndexer"]}`;
                // if (productDictionary[rateType] === undefined) console.log(`"${rateType}": "",`);
                
                // organize result
                result.push({
                    companyName: d["participant"]["name"],
                    type: rateType,
                    avg: avg,
                    url: participant.url,
                    logo: participant.logo
                });
            }
        }
        return result;
    }
}