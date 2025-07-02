'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './button'

export function BurgerMenu({ className }: { className: string }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <>
      <div
        className={`relative w-icon-lg overflow-hidden h-icon-lg cursor-pointer duration-300 z-20 ${className}`}
        onClick={() => setIsOpenMenu((prev) => !prev)}
      >
        <div
          className={` duration-300 w-full h-[2px] absolute bg-white left-0 top-0 ${isOpenMenu ? ' animate-burgerTopOpen' : 'animate-burgerTopClose'}`}
        ></div>
        <div
          className={` duration-200 w-full h-[2px] absolute bg-white left-0 top-1/2 -translate-y-1/2 ${isOpenMenu ? ' animate-leftHide' : 'animate-leftShow'}`}
        ></div>
        <div
          className={` duration-300 w-full h-[2px] absolute bg-white left-0 top-full -translate-y-1/2 ${isOpenMenu ? ' animate-burgerBottomOpen' : 'animate-burgerBottomClose'}`}
        ></div>
      </div>
      <BurgerOverlay isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </>
  )
}
export function BurgerOverlay({
  isOpenMenu,
  setIsOpenMenu,
}: {
  isOpenMenu: boolean
  setIsOpenMenu: (value: boolean) => void
}) {
  const handleClose = () => setIsOpenMenu(false)
  return (
    <div
      className={`fixed top-0 backdrop-blur-2xl bg-black/40 left-0 duration-300 overflow-hidden h-screen flex items-center z-10 justify-center ${isOpenMenu ? 'w-full' : 'w-0'}`}
    >
      <nav className="flex flex-col items-center gap-10">
        <Link
          onClick={handleClose}
          className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
          href="#benifits"
        >
          Преимущества
        </Link>

        <Link
          onClick={handleClose}
          className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
          href="#location"
        >
          Локация
        </Link>
        <Link
          onClick={handleClose}
          className="text-sm text-slate-200 hover:text-slate-200/80 duration-300"
          href="#founders"
        >
          О создателях
        </Link>
        <Link onClick={handleClose} href="#feedback">
          <Button variant="primary-red" className="uppercase font-bold">
            Контакты
          </Button>
        </Link>
      </nav>
    </div>
  )
}
