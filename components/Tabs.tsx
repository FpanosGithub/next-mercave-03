'use client'
import Link from "next/link"
import clsx from "clsx"

type TabItem = {
  name: string,
  href: string,
  current: boolean
}

export default function Tabs({tabs}:{tabs:TabItem[]}) {
  return (
    <div className="ml-4 mt-2">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block rounded-md border border-gray-300 py-2 pr-8 text-base focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name || 0}>
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
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                    {'border-green-700 text-green-700':tab.current},
                    {'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':!tab.current}
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
