'use client'
import { useRouter } from "next/navigation"
import Link from "next/link"
import clsx from "clsx"

type TabItem = {
  name: string,
  href: string,
  current: boolean
}

export default function Tabs({tabs}:{tabs:TabItem[]}) {

  const router = useRouter()
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    const href = tabs.find((tab)=>(tab.name === event.target.value))?.href
    router.push(href || '')
  };
  
  return (
    <div className="pl-4 bg-white shadow">
      <div className="sm:hidden py-2 -mb-2">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block h-9 w-56 pl-2 rounded-md border border-gray-300 text-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
          defaultValue={(tabs as any).find((tab:any) => tab.current).name || 0}
          onChange={handleChange}>
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="">
          <nav className="-mb-2 flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={
                  clsx(
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm',
                    {'border-green-700 text-emerald-700 font-semibold':tab.current},
                    {'border-transparent text-gray-500 font-medium hover:border-gray-300 hover:text-gray-700':!tab.current}
                  )
                }
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
