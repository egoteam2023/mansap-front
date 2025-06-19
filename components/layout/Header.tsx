'use client'
import Link from 'next/link'
import Button from '../ui/button'
import { BurgerMenu } from '../ui/burgerMenu'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed left-0 top-0 w-full z-50 bg-header shadow-md">
      <div className="container h-20 flex items-center justify-between py-4 px-5 font-manrope">
        <Link href="#hero">
          <Image src="/logo.svg" alt="mansap" width={140} height={36} />
        </Link>
        <nav className="max-sm:hidden flex items-center gap-10">
          <Link
            className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
            href="#about-us"
          >
            О нас
          </Link>
          <Link
            className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
            href="#benifits"
          >
            Преимущества
          </Link>
          <Link
            className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
            href="#founders"
          >
            О создателях
          </Link>
          <Link href="#feedback">
            <Button variant="primary-red" className="uppercase font-bold">
              Контакты
            </Button>
          </Link>
        </nav>
        <BurgerMenu className="sm:hidden" />
      </div>
    </header>
  )
}
