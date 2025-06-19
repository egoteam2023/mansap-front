export default function SectionTitle({
  title,
  description,
  className = '',
}: {
  title: string
  description?: string
  className?: string
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${className} text-center font-philosopher uppercase text-white`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && <p className="text-gray-500">{description}</p>}
    </div>
  )
}
