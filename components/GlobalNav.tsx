'use client'
import clsx from "clsx"
import {useState} from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Modalbar from "./Modalbar"

export default function GlobalNav({admin = false, children}:{admin?:Boolean, children: React.ReactNode}) {
  const [open, setOpen] = useState(false)

  return (
    <div className='grid grid-rows-header'>
      <Navbar admin = {admin} open = {open} setOpen = {setOpen} />
      <div className={clsx('h-screen', {'grid md:grid-cols-sidebar':!admin})}>
        {(!open && !admin) && <Sidebar open = {open}/>}
        <div className="overflow-y-scroll">
          {children}
        </div>
        {(open && !admin) && <Modalbar open = {open} setOpen = {setOpen}/>}
      </div>
    </div>
  )
}