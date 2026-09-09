import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full font-bold transition-all select-none outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-[#7C5DFA] text-white hover:bg-[#9277FF] active:translate-y-px",
        primary:
          "bg-[#7C5DFA] text-white hover:bg-[#9277FF] active:translate-y-px",
        secondary:
          "bg-[#F9FAFE] text-[#7E88C3] hover:bg-[#DFE3FA] dark:bg-[#252945] dark:text-[#DFE3FA] dark:hover:bg-white dark:hover:text-[#7E88C3] active:translate-y-px",
        dark:
          "bg-[#373B53] text-[#888EB0] hover:bg-[#0C0E16] dark:text-[#DFE3FA] dark:hover:bg-[#1E2139] active:translate-y-px",
        destructive:
          "bg-[#EC5757] text-white hover:bg-[#FF9797] active:translate-y-px",
        addItem:
          "w-full bg-[#F9FAFE] text-[#7E88C3] hover:bg-[#DFE3FA] dark:bg-[#252945] dark:text-[#DFE3FA] active:translate-y-px",
        outline:
          "border border-[#DFE3FA] dark:border-[#252945] bg-transparent hover:bg-muted text-foreground",
        ghost:
          "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
      },
      size: {
        default: "h-12 px-6 text-[15px] tracking-[-0.25px]",
        action: "h-12 pl-2 pr-4 text-[15px] tracking-[-0.25px] gap-4",
        sm: "h-10 px-4 text-[13px] tracking-[-0.25px]",
        lg: "h-12 px-8 text-[15px] tracking-[-0.25px]",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

