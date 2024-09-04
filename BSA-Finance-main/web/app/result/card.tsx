export default function Card({ data }:{ data:any }) {
  // weighted average
  let avg: number = 0;
  if (data.prices) {    // temporary solution
    for (let interval of data.prices) {
      avg += interval.value * interval.customers.rate;
    }
  }
  else if (data.applications) {
    for (let interval of data.applications) {
      avg += interval.indexer.rate * interval.customers.rate;
    }
  }
  
  return (
    <div className="border-black border-4 m-4 rounded-md p-3 flex justify-between">
      <div>
        <p>type: {data.type}</p>
        <p>companyName: {data.companyName}</p>
      </div>
      <div>
        <p>min: {(data.minimum * 100).toFixed(2)}</p>
        <p>max: {(data.maximum * 100).toFixed(2)}</p>
        <p>avg: {(avg * 100).toFixed(2)}</p>
      </div>
    </div>
  )
}