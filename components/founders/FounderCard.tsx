import { IFounder } from "./types"

function FounderCard({ image, description }: IFounder) {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-[40px] w-11/12 md:w-10/12 lg:w-1/2">
      <div className="w-[380px] md:w-[177px] h-[180px]">
        <img src={ image } alt="founder" className="w-full h-full object-cover" />
      </div>
      <p className="text-sm flex-1 text-white">{ description }</p>
    </div>
  )
}

export default FounderCard