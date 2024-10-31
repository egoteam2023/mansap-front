import Form from 'next/form'
import Input from '../ui/input'
import Button from '../ui/button'

function FeedbackForm() {
  return (
    <div className="rounded-2xl py-[60px] pl-[55px] bg-black/30 backdrop-blur-md shadow-lg w-custom300 sm:w-custom400 lg:w-custom500 xl:w-custom600 pr-[70px] flex flex-col">
      <h2 className="text-white text-3xl font-bold">Feedback</h2>
      <p className="text-white font-light mt-4">
        Получить бесплатную консультацию:
      </p>
      <Form action={'/'} className="flex flex-col mt-20 space-y-12">
        <Input name="fullName" placeholder="Имя" />
        <Input name="phone" placeholder="Телефон" />
        <Button type="submit">Create Post</Button>
      </Form>
    </div>
  )
}

export default FeedbackForm
