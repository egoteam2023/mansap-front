interface ServiceCardProps {
  data: {
    image: string
    title: string
    description: string
  }
}

export default function ServiceCard({ data }: ServiceCardProps) {
  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover opacity-30"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>

      <div className="relative z-10 h-full flex items-center justify-center px-6 text-white font-philosopher container">
        <div className="flex items-center gap-10 max-w-[90%] w-full justify-center">
          <p className="italic text-3xl text-right w-1/3">{data.title}</p>

          <svg
            className="shrink-0"
            width="7"
            height="97"
            viewBox="0 0 7 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="7" height="97" fill="#D9D9D9" />
          </svg>

          <p className="text-lg text-left w-1/3 font-manrope">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
