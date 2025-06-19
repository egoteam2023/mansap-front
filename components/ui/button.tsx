import { ButtonHTMLAttributes, forwardRef, useMemo } from 'react'

interface IButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
}

const Button = forwardRef<HTMLButtonElement, IButtonProp>(
  ({ className = '', variant, children, ...props }, ref) => {
    const { style, classes } = useMemo(() => {
      switch (variant) {
        case 'primary-yellow':
          return {
            classes:
              'bg-yellow py-3 px-10 font-semibold hover:bg-yellow/90 text-black',
            style: {},
          }
        case 'primary-red':
          return {
            classes: 'py-3 px-10 font-semibold text-white hover:opacity-90',
            style: {
              background:
                'linear-gradient(261.42deg, #FF5353 -6.48%, #2F2F2F 101.92%)',
            },
          }
        default:
          return {
            classes: 'bg-slate-200 px-5 py-2 text-black hover:bg-slate-200/80',
            style: {},
          }
      }
    }, [variant])

    return (
      <button
        ref={ref}
        className={`text-base duration-300 rounded-md ${classes} ${className}`}
        style={style}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
