import FounderCard from "./FounderCard"
import { data } from "./dummyData"

function Founders() {
  return (
    <section className="container mt-[60px] lg:mt-[80px]">
      <h2 className="text-center text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-[50px] lg:mb-[74px]">
        Почему нам доверяют?
      </h2>
      <div className="w-full flex flex-col items-center lg:flex-row lg:items-start gap-[40px]">
        {data.map((founder) => (
          <FounderCard key={founder.id} {...founder} />
        ))}
      </div>
    </section>
  )
}

export default Founders