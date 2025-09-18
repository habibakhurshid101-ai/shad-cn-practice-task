import React from "react"
import { adminCard } from "../../src/constant/index"
import { useSidebar } from "@/components/ui/sidebar"

const AdminCards = () => {
  const { state } = useSidebar()

  return (
    <div
      className={`grid gap-5 mt-6 w-full transition-all duration-300
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
      `}
    >
      {adminCard.map((card, index) => (
        <div
          key={index}
          className="bg-black text-white p-5 rounded-lg border border-neutral-800 flex flex-col w-full"
        >
          <div className="items-center space-x-2 mb-2">
            <div className="text-2xl mb-2">{card.icon}</div>
            <h2 className="text-2xl font-semibold">{card.name}</h2>
          </div>

          <p
            className={`text-sm font-medium mb-4 ${
              card.name === "Total Revenue"
                ? "text-green-500"
                : card.name === "Appointments"
                ? "text-blue-500"
                : card.name === "Patients"
                ? "text-yellow-500"
                : "text-purple-500"
            }`}
          >
            {card.detail.number}
            <span className="text-gray-400 font-normal text-base">
              {card.detail.text}
            </span>
          </p>

          <p className="text-4xl font-bold">{card.income}</p>
        </div>
      ))}
    </div>
  )
}

export default AdminCards
