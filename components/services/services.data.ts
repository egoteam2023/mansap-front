interface IService {
  id: number
  title: string
  description: string
  image: string
}

const servicesData: IService[] = [
  {
    id: 1,
    title: 'Конференц-залы',
    description:
      'Современные и просторные конференц-залы с полным набором оборудования для продуктивных встреч и мероприятий.',
    image: '/images/conferense.png',
  },
  {
    id: 2,
    title: 'Отдельный ресепшн',
    description:
      'Эксклюзивный ресепшн для клиентов с индивидуальным подходом и высококлассным сервисом.',
    image: '/gallery2.png',
  },
  {
    id: 3,
    title: 'Безопасность',
    description:
      'Система многоуровневой безопасности для обеспечения спокойствия и защиты всех гостей и сотрудников.',
    image: '/gallery3.png',
  },
  {
    id: 4,
    title: 'Камера хранения',
    description:
      'Удобные и надежные камеры хранения для хранения личных вещей и ценностей.',
    image: '/gallery4.png',
  },
  {
    id: 5,
    title: 'Этаж премиум-кабинетов',
    description:
      'Полный этаж, оснащенный кабинетами премиум-класса для руководителей и VIP-клиентов.',
    image: '/gallery1.png',
  },
]

export { servicesData }
export type { IService }
