import { cn } from "@/lib/utils";

export type InvoiceStatus = "paid" | "pending" | "draft";

interface StatusBadgeProps {
  status: InvoiceStatus | string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const normalizedStatus = status.toLowerCase() as InvoiceStatus;

  const config = {
    paid: {
      bg: "bg-[#33D69F]/10",
      text: "text-[#33D69F]",
      dot: "bg-[#33D69F]",
      label: "Paid",
    },
    pending: {
      bg: "bg-[#FF8F00]/10",
      text: "text-[#FF8F00]",
      dot: "bg-[#FF8F00]",
      label: "Pending",
    },
    draft: {
      bg: "bg-[#373B53]/10 dark:bg-[#DFE3FA]/10",
      text: "text-[#373B53] dark:text-[#DFE3FA]",
      dot: "bg-[#373B53] dark:bg-[#DFE3FA]",
      label: "Draft",
    },
  }[normalizedStatus] ?? {
    bg: "bg-muted",
    text: "text-muted-foreground",
    dot: "bg-muted-foreground",
    label: status,
  };

  return (
    <div
      className={cn(
        "w-[104px] h-[40px] rounded-[6px] flex items-center justify-center gap-2 font-bold text-[15px] tracking-[-0.25px] select-none transition-colors",
        config.bg,
        config.text,
        className,
      )}
    >
      <span className={cn("w-2 h-2 rounded-full", config.dot)} />
      <span>{config.label}</span>
    </div>
  );
}
