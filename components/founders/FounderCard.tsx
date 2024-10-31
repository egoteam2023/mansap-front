import { IFounder } from "@/type"

function FounderCard({ image, description }: IFounder) {
  return (
    <div className="flex gap-[40px] w-1/2">
      <div className="w-[177px] h-[180px]">
        <img src={image} alt="founder" className="w-full h-full object-cover" />
      </div>
      <p className="text-sm flex-1 text-white">{description}</p>
    </div>
  )
}

export default FounderCard