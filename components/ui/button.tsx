import { ButtonHTMLAttributes, forwardRef,  useMemo } from 'react'

interface IButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
}
const Button = forwardRef<HTMLButtonElement, IButtonProp>(
  ({ className, variant, children, ...props }, ref) => {
    const generateStyle = useMemo(() => {
      switch (variant) {
        case 'primary-yellow':
          return 'bg-yellow py-3 px-10 font-semibold hover:bg-yellow/90 text-black'
        default:
          return 'bg-slate-200 px-5 py-2 text-black hover:bg-slate-200/80'
      }
    }, [variant])
    return (
      <button
        className={`text-base duration-300 rounded-md ${generateStyle} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button';

export default Button
