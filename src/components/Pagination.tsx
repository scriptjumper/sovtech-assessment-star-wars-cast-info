import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  currentPage: number
}

const Pagination: React.FC<Props> = (Props) => {
  return (
    <div>
      <ul className="flex flex items-center justify-center text-gray-700 opacity-80">
        <li className="mx-1 px-3 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg hover:text-gray-100">
          <Link className="flex items-center font-bold " to="">
            Previous
          </Link>
        </li>

        <li className="mx-1 px-3 py-2 bg-yellow-400 rounded-lg">{Props.currentPage}</li>

        <li className="mx-1 px-3 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg hover:text-gray-100">
          <Link className="flex items-center font-bold" to="">
            Next
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
