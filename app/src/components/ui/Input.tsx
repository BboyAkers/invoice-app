import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  label?: React.ReactNode
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, id, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : generatedId)
    const isInvalid = Boolean(error || props["aria-invalid"])

    const inputElement = (
      <input
        id={inputId}
        type={type}
        ref={ref}
        data-slot="input"
        aria-invalid={isInvalid ? "true" : undefined}
        className={cn(
          "h-12 w-full min-w-0 rounded-[4px] border px-5 text-[15px] font-bold tracking-[-0.25px] transition-colors outline-none",
          "bg-white text-[#0C0E16] border-[#DFE3FA] focus:border-[#7C5DFA] focus-visible:border-[#7C5DFA] focus-visible:ring-0",
          "dark:bg-[#1E2139] dark:text-white dark:border-[#252945] dark:focus:border-[#7C5DFA]",
          "placeholder:text-[#888EB0] placeholder:font-medium placeholder:opacity-50",
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-[#EC5757] dark:aria-invalid:border-[#EC5757]",
          className
        )}
        {...props}
      />
    )

    if (label || error) {
      return (
        <div className="w-full space-y-2">
          <div className="flex items-center justify-between text-[13px] font-medium leading-[15px]">
            {label && (
              <label
                htmlFor={inputId}
                className={cn(
                  "text-[#7E88C3] dark:text-[#DFE3FA] transition-colors cursor-pointer",
                  isInvalid && "text-[#EC5757] dark:text-[#EC5757]"
                )}
              >
                {label}
              </label>
            )}
            {error && (
              <span className="text-[#EC5757] text-[10px] font-semibold tracking-[-0.2px]">
                {error}
              </span>
            )}
          </div>
          {inputElement}
        </div>
      )
    }

    return inputElement
  }
)

Input.displayName = "Input"

export { Input }

