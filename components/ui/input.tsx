import { forwardRef, InputHTMLAttributes } from 'react'

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`bg-transparent outline-none duration-300 text-white p-1 border-b focus:border-b-blue-500 font-light ${className}`}
        ref={ref}
        {...props}
      />
    )
  },
)

Input.displayName = 'Input';

export default Input
