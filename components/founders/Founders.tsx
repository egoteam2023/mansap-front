import Image from 'next/image'

function Founders() {
  return (
    <section id="founders" className="bg-white py-20">
      <div className="flex flex-col items-center gap-10 lg:gap-[60px] container">
        <h2 className="text-center text-xl lg:text-3xl font-semibold font-philosopher w-full md:w-[30%]">
          ОТ СОЗДАТЕЛЕЙ MEDCITY
        </h2>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="w-full md:w-[50%] text-center md:text-left text-base md:text-lg font-manrope ">
            У основателей - братьев Замира и Дастана Чаргыновых имеется большой
            опыт в открытии новых направлений в строительном сегменте. Так, в
            2018 году ими был создан и запущен единственный в своем роде
            медицинский комплекс MedCITY, который стал отличным решением для
            врачей частной практики, мини-клиник, аптек и медицинских магазинов.
          </p>
          <svg
            width="294"
            height="235"
            viewBox="0 0 294 235"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:block"
          >
            <path
              d="M240.03 49.8121C192.169 40.7761 162.845 79.5031 162.845 79.5031C162.845 79.5031 186.473 34.4956 147.11 0.094233L146.999 2.57022e-05L146.889 0.0942329C107.526 34.4877 131.154 79.5031 131.154 79.5031C131.154 79.5031 101.83 40.7761 53.9693 49.8121C6.10885 58.8481 -0.791313 100.582 0.0662848 126.395C0.923882 152.208 35.8574 189.215 71.6485 173.726C107.44 158.237 94.0721 129.841 94.0721 129.841C94.0721 129.841 99.2491 153.079 70.783 156.086C42.3248 159.1 19.4685 111.769 56.55 90.6902C93.6315 69.6113 122.09 97.1434 128.612 118.937C135.127 140.73 126.842 163.834 101.775 184.364C76.7154 204.893 38.4381 201.698 38.4381 201.698C85.4409 249.885 132.444 193.525 132.444 193.525C125.953 225.116 144.671 234.019 146.889 234.953L146.999 235L147.11 234.953C149.328 234.019 168.046 225.116 161.555 193.525C161.555 193.525 208.558 249.893 255.561 201.698C255.561 201.698 217.291 204.893 192.224 184.364C167.165 163.834 158.872 140.722 165.387 118.937C171.901 97.1434 200.36 69.6113 237.449 90.6902C274.538 111.769 251.682 159.1 223.216 156.086C194.758 153.071 199.927 129.841 199.927 129.841C199.927 129.841 186.559 158.237 222.35 173.726C258.142 189.215 293.067 152.215 293.933 126.395C294.798 100.574 287.89 58.8482 240.03 49.8121Z"
              fill="#757575"
            />
          </svg>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-2 md:gap-10 lg:gap-[60px] font-philosopher">
          <div className="flex flex-col items-center gap-2 lg:gap-6 font-manrope">
            <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] relative bg-slate-500 overflow-hidden rounded-3xl">
              <Image src="/founder2.png" alt="image" width={500} height={500} />
            </div>
            <div className="text-center flex flex-col items-center ">
              <p className="font-semibold text-xl">Дастан Чаргынов</p>
              <p className="font-light md:text-xl">Учредитель и гендиректор</p>
            </div>
          </div>
          <div className="flex items-center gap-10 lg:gap-6 max-w-[600px]">
            <span className="text-[150px] pr-4 hidden md:block">“</span>
            <p className="text-lg lg:text-xl italic text-center">
              Успех наших начинаний зависит от правильно принятых решений.
              Поэтому важно понимать в какой обстановке мы их принимаем.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center gap-2 md:gap-10 lg:gap-[60px] font-philosopher">
          <div className="flex flex-col items-center gap-2 lg:gap-6 font-manrope">
            <div className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] relative bg-slate-500 overflow-hidden rounded-3xl">
              <Image src="/founder1.png" alt="image" width={500} height={500} />
            </div>
            <div className="text-center flex flex-col items-center ">
              <p className="font-semibold text-xl">Замир Чаргынов</p>
              <p className="font-light md:text-xl">Учредитель и гендиректор</p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 max-w-[600px]">
            <span className="text-[150px] pr-4 hidden md:block">“</span>
            <p className="text-lg lg:text-xl italic text-center">
              Перед сложными решениями всегда не хватает тишины, а ценность
              принятия правильных решений очень велика. Кабинеты Мансап созданы
              для ясности мыслей.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founders
