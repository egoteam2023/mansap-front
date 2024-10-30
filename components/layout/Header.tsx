import Link from 'next/link'
import Button from '../ui/button'

export function Header() {
  return (
    <header className="container flex justify-between py-4">
      <div className="text-xl font-bold cursor-default text-slate-200">Logo</div>
      <div className="flex items-center gap-10">
        <Link className="text-sm text-slate-200 hover:text-slate-200/80 duration-300" href="#about">
          О нас
        </Link>
        <Link className="text-sm text-slate-200 hover:text-slate-200/80 duration-300" href="#benifits">
          Преимущества
        </Link>
        <Link className="text-sm text-slate-200 hover:text-slate-200/80 duration-300" href="#creators">
          О создателях
        </Link>
        <Link href="#feedback">
          <Button>Контакты</Button>
        </Link>
      </div>
    </header>
  )
}
