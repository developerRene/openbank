import Card from "./card";

export default function CardList({ data }:{ data:any[] }) {
  return (
    <div>
      {data.map((cardData, index) => (
        <div key={index}>
          <Card data={cardData} />
        </div>
      ))}
    </div>
  )
}