'use client'

import { useEffect } from "react"

export default function Error({
    error,
    reset
}: {
    error: Error
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-22 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">Parece que hay un problema con el servidor.</h1>
                            <p className="my-2 text-gray-800">No se ha encontrado la información del vehículo.</p>
                            <button onClick={reset} className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-gray-600 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-opacity-50">Volver a intentar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img width="350" src="https://img.freepik.com/iconos-gratis/lupa_318-579080.jpg" />
            </div>
        </div>
    )
}