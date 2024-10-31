import FounderCard from "./FounderCard"
import { data } from "./dummyData"

function Founders() {
  return (
    <section className="container mt-[80px]">
      <h2 className="text-center text-white text-6xl font-bold mb-[74px]">Почему нам доверяют?</h2>
      <div className="flex items-center gap-[40px]">
        {data.map((founder) => (
          <FounderCard key={founder.id} {...founder} />
        ))}
      </div>
    </section>
  )
}

export default Founders