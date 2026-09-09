import illustrationEmpty from '@/assets/illustration-empty.svg'

export function EmptyInvoices() {
  return (
    <div className="text-center py-16 sm:py-24 max-w-sm mx-auto space-y-6">
      <img
        src={illustrationEmpty}
        alt="No invoices"
        className="w-52 h-48 mx-auto"
      />
      <div className="space-y-2">
        <h2 className="text-heading-m text-[#0C0E16] dark:text-white">
          There is nothing here
        </h2>
        <p className="text-body-1 text-[#888EB0] dark:text-[#DFE3FA] leading-relaxed">
          Create an invoice by clicking the <br />
          <span className="font-bold text-foreground">New Invoice</span> button and get started
        </p>
      </div>
    </div>
  )
}