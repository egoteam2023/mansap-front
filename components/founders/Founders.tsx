import Image from 'next/image'

function Founders() {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-[40px] lg:gap-[60px]">
        <div className="w-full flex flex-col items-center gap-2">
          <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
            ОТ СОЗДАТЕЛЕЙ MEDCITY
          </h2>
          <p className="text-center text-base md:text-lg lg:text-xl text-slate-500 max-w-[1000px]">
            У основателей - братьев Замира и Дастана Чаргыновых имеется большой
            опыт в открытии новых направлений в строительном сегменте. Так, в
            2018 году ими был создан и запущен единственный в своем роде
            медицинский комплекс MedCITY, который стал отличным решением для
            врачей частной практики, мини-клиник, аптек и медицинских магазинов.
          </p>
        </div>

        <div className="w-full flex lg:flex-row items-center justify-between gap-[40px] lg:gap-[60px]">
          <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] relative bg-slate-500 overflow-hidden rounded-3xl">
            <Image src="/founder1.png" alt="image" width={500} height={500} />
          </div>
          <div className="flex items-center gap-10 lg:gap-6 max-w-[600px]">
            <span className="text-[150px] italic pr-4">“</span>
            <p className="text-lg lg:text-xl italic">
              Успех наших начинаний зависит от правильно принятых решений.
              Поэтому важно понимать в какой обстановке мы их принимаем.
            </p>
            <span className="text-[150px] italic">”</span>
          </div>
        </div>
        <div className="w-full flex lg:flex-row items-center justify-between gap-[40px] lg:gap-[60px]">
          <div className="flex items-center gap-4 lg:gap-6 max-w-[600px]">
            <span className="text-[150px] italic pr-4">“</span>
            <p className="text-lg lg:text-xl italic">
              Успех наших начинаний зависит от правильно принятых решений.
              Поэтому важно понимать в какой обстановке мы их принимаем.
            </p>
            <span className="text-[150px]">”</span>
          </div>
          <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] relative bg-slate-500 overflow-hidden rounded-3xl">
            <Image src="/founder2.png" alt="image" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders
