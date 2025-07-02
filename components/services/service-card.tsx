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

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 text-white font-philosopher container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-[90%]">
          <p className="italic text-2xl sm:text-3xl text-center md:text-right w-full md:w-1/3 break-words">
            {data.title}
          </p>

          <svg
            className="shrink-0 hidden md:block"
            width="7"
            height="97"
            viewBox="0 0 7 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="7" height="97" fill="#D9D9D9" />
          </svg>

          <p className="text-base sm:text-lg text-center md:text-left w-full md:w-1/3 font-manrope">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  )
}
