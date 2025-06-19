interface IService {
  id: number
  title: string
  description: string
  image: string
}

const servicesData: IService[] = [
  {
    id: 1,
    title: 'Представительский этаж',
    description:
      'Эксклюзивный этаж с ограниченным доступом, только по приглашению',
    image: '/service1.png',
  },
  {
    id: 2,
    title: 'Сейфовые ячейки',
    description:
      'Для хранения важных контрактов, активов или денежных средств в безопасности',
    image: '/service2.png',
  },
  {
    id: 3,
    title: 'Отдельный ресепшн',
    description:
      'Ваших гостей встречает администратор прямо на этаже — без очередей и ожиданий',
    image: '/service3.png',
  },
  {
    id: 4,
    title: 'Переговорные комнаты',
    description:
      'Переговорные комнаты для продуктивных встреч и мероприятий',
    image: '/service4.png',
  }
]

export { servicesData }
export type { IService }
