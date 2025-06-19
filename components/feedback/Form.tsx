import Form from 'next/form'
import Input from '../ui/input'
import Button from '../ui/button'

function FeedbackForm() {
  return (
    <div className="rounded-2xl p-[60px] bg-black/30 backdrop-blur-md shadow-lg w-full mobile:w-custom300 sm:w-custom400 lg:w-custom500 xl:w-custom600 flex flex-col gap-5">
      <div>
        <h2 className="text-white text-3xl font-bold font-philosopher text-center">
          Связаться с нами
        </h2>
        <p className="text-[#888888] font-light text-center">
          Получить бесплатную консультацию:
        </p>
      </div>
      <Form action={'/'} className="flex flex-col space-y-12">
        <Input name="fullName" placeholder="Имя" />
        <Input name="phone" placeholder="Номер телефона" />
        <Button type="submit" variant="primary-red">
          Отправить
        </Button>
      </Form>
    </div>
  )
}

export default FeedbackForm
