'use client'
import Input from '../ui/input'
import Button from '../ui/button'
import { z } from 'zod'
import { useEffect, useState } from 'react'

const formSchema = z.object({
  fullName: z.string().min(1, 'Заполните поле'),
  phone: z.string().min(1, 'Заполните поле'),
})

const formField = [
  { name: 'fullName', placeholder: 'Имя', type: 'text' },
  { name: 'phone', placeholder: 'Номер телефона', type: 'text' },
]

interface IFeedback {
  fullName: string
  phone: string
}

function FeedbackForm() {
  const [formState, setFormState] = useState<IFeedback>({
    fullName: '',
    phone: '',
  })
  const [resMessage, setMessage] = useState({
    res: true,
    message: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  )
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (key: keyof FormData, value: any) => {
    setFormState((prev) => ({ ...prev, [key]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = formSchema.safeParse(formState)

    if (result.success) {
      setErrors({})
      setIsLoading(true)
      try {
        const res = await fetch('/api/send-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(result.data),
        })
        if (res.ok) {
          setMessage({
            res: true,
            message: 'Данные успешно отправлены!',
          })
          setFormState({ fullName: '', phone: '' })
        } else {
          setMessage({
            res: false,
            message: 'Ошибка при отправке!',
          })
        }
      } catch (e) {
        console.error(e)
        setMessage({
          res: false,
          message: 'Ошибка при отправке!',
        })
      } finally {
        setIsLoading(false)
      }
    } else {
      const errs: any = {}
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormData
        errs[field] = err.message
      })
      setErrors(errs)
    }
  }

  useEffect(() => {
    if (resMessage.message) {
      const timer = setTimeout(() => {
        setMessage({ res: true, message: '' })
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [resMessage.message])

  return (
    <div className="rounded-2xl p-[60px] bg-black/30 backdrop-blur-md shadow-lg w-full mobile:w-custom300 sm:w-custom400 lg:w-custom500 xl:w-custom600 flex flex-col gap-5">
      <div>
        <h2 className="text-white text-3xl font-bold font-philosopher text-center">
          Получить <br className="md:hidden" />
          планировки
        </h2>
        <p className="text-[#888888] font-light text-center">
          Оставьте имя и номер телефона
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
        <div className="space-y-4">
          {formField.map((el) => {
            const error = errors[el.name as keyof FormData]
            return (
              <div className="w-full" key={el.name}>
                <Input
                  value={formState[el.name as keyof IFeedback]}
                  className="w-full"
                  onChange={(e) =>
                    handleChange(el.name as keyof FormData, e.target.value)
                  }
                  name={el.name}
                  placeholder={el.placeholder}
                  type={el.type}
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </div>
            )
          })}
          {resMessage.message && (
            <p style={{ color: resMessage.res ? 'green' : 'red' }}>
              {resMessage.message}
            </p>
          )}
        </div>
        <Button type="submit" variant="primary-red" disabled={isLoading}>
          {isLoading ? 'Отправка...' : 'Отправить'}
        </Button>
      </form>
    </div>
  )
}

export default FeedbackForm
