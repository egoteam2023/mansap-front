'use client'
import Link from 'next/link'
import Button from '../ui/button'
import { useEffect, useState } from 'react'
import { BurgerMenu } from '../ui/burgerMenu'

export function Header() {
  

  return (
    <header
      className={`fixed h-20 left-1/2 -translate-x-1/2 px-5 w-full flex items-center justify-between py-4 duration-500 bg-header shadow-md  z-10`}
    >
      <div className="text-xl font-bold cursor-default text-slate-200">
        Logo
      </div>
      <nav className="max-sm:hidden flex items-center gap-10">
        <Link
          className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
          href="#about"
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
          href="#creators"
        >
          О создателях
        </Link>
        <Link href="#feedback">
          <Button>Контакты</Button>
        </Link>
      </nav>
      <BurgerMenu
        className="sm:hidden"
      />
    </header>
  )
}
