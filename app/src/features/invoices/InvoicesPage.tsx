import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { StatusBadge, type InvoiceStatus } from '@/components/ui/StatusBadge'
import invoicesData from '@/data/invoices.json'
import plusIcon from '@/assets/icon-plus.svg'
import arrowDownIcon from '@/assets/icon-arrow-down.svg'
import arrowRightIcon from '@/assets/icon-arrow-right.svg'
import { EmptyInvoices } from './EmptyInvoices'
import { Skeleton } from '@/components/ui/skeleton'
import { getInvoicesQueryOptions } from './queries/getInvoices'


export interface Invoice {
  id: string
  createdAt: string
  paymentDue: string
  description: string
  paymentTerms: number
  clientName: string
  clientEmail: string
  status: 'paid' | 'pending' | 'draft'
  total: number
}

async function fetchInvoices(): Promise<Invoice[]> {
  await new Promise((resolve) => setTimeout(resolve, 80))
  return invoicesData as Invoice[]
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export function InvoicesPage() {
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const { data: invoices, isLoading } = useQuery(getInvoicesQueryOptions())

  const filteredInvoices = invoices?.filter((invoice) => {
    if (selectedStatuses.length === 0) return true
    return selectedStatuses.includes(invoice.status)
  })

  const toggleStatusFilter = (status: string) => {
    setSelectedStatuses((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    )
  }

  return (
    <div className="space-y-8 font-sans">
      <section>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-heading-m md:text-heading-l text-[#0C0E16] dark:text-white transition-colors">
              Invoices
            </h1>
            <p className="text-body-1 text-[#888EB0] dark:text-[#DFE3FA] mt-1 transition-colors">
              <span className="hidden sm:inline">
                There are {filteredInvoices?.length ?? 0} total invoices
              </span>
              <span className="sm:hidden">
                {filteredInvoices?.length ?? 0} invoices
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Filter Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsFilterOpen((prev) => !prev)}
                className="flex items-center gap-3 font-bold text-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white hover:text-[#7E88C3] transition-colors cursor-pointer"
              >
                <span>
                  Filter <span className="hidden sm:inline">by status</span>
                </span>
                <img
                  src={arrowDownIcon}
                  alt=""
                  className={`w-2.5 h-2 transition-transform duration-200 ${isFilterOpen ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 top-10 z-30 w-48 p-5 bg-white dark:bg-[#252945] rounded-[8px] shadow-[0_10px_20px_rgba(0,0,0,0.25)] space-y-3">
                  {(['draft', 'pending', 'paid'] as InvoiceStatus[]).map((status) => (
                    <label
                      key={status}
                      className="flex items-center gap-3 font-bold text-[15px] tracking-[-0.25px] text-[#0C0E16] dark:text-white capitalize cursor-pointer hover:text-[#7C5DFA] transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStatuses.includes(status)}
                        onChange={() => toggleStatusFilter(status)}
                        className="w-4 h-4 rounded-[2px] accent-[#7C5DFA] cursor-pointer"
                      />
                      {status}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* New Invoice Action Button */}
            <Button variant="primary" size="action" className="shadow-xs">
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <img src={plusIcon} alt="" className="w-2.5 h-2.5" />
              </span>
              <span>
                New <span className="hidden sm:inline">Invoice</span>
              </span>
            </Button>
          </div>
        </div>
      </section>
      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="w-full h-[72px]" />
          <Skeleton className="w-full h-[72px]" />
          <Skeleton className="w-full h-[72px]" />
          <Skeleton className="w-full h-[72px]" />
          <Skeleton className="w-full h-[72px]" />
        </div>
      ) : filteredInvoices && filteredInvoices.length > 0 ? (
        <div className="space-y-4">
          {filteredInvoices.map((invoice) => (
            <div
              key={invoice.id}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:px-8 sm:py-4 bg-white dark:bg-[#1E2139] rounded-[8px] border border-transparent hover:border-[#7C5DFA] shadow-[0_10px_10px_-10px_rgba(72,84,159,0.10)] transition-all duration-150 cursor-pointer gap-4"
            >
              {/* Top / Left: ID, Due Date, Client Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
                <span className="font-bold text-[15px] tracking-[-0.25px]">
                  <span className="text-[#7E88C3]">#</span>
                  <span className="text-[#0C0E16] dark:text-white">{invoice.id}</span>
                </span>
                <span className="text-body-1 text-[#7E88C3] dark:text-[#DFE3FA]">
                  Due {formatDate(invoice.paymentDue)}
                </span>
                <span className="text-body-1 text-[#888EB0] dark:text-white">
                  {invoice.clientName}
                </span>
              </div>

              {/* Bottom / Right: Amount, Status Badge, Arrow */}
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-5">
                <span className="text-heading-s text-[#0C0E16] dark:text-white">
                  £{invoice.total.toLocaleString('en-GB', { minimumFractionDigits: 2 })}
                </span>

                <StatusBadge status={invoice.status} />

                <img
                  src={arrowRightIcon}
                  alt=""
                  className="hidden sm:inline-block w-1.5 h-2.5 transition-transform group-hover:translate-x-1"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <EmptyInvoices />
      )}
    </div>
  )
}

