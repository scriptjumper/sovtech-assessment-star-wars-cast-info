import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  name: string
  index: number
}
const Person: React.FC<Props> = (Props) => {
  const imageURL: string = 'https://via.placeholder.com/400x550'

  return (
    <div className={`w-full w-1 md:w-1/3 xl:w-1/5 p-5 flex flex-col items-center`}>
      <Link className="flex items-center font-bold" to={`/person/${Props.name}/${Props.index + 1}`}>
        <div>
          <img className="hover:grow hover:shadow-lg w-48 rounded-xl xl:w-48 w-60" alt={Props.name} src={imageURL} />
          <div className="pt-3 flex items-center justify-between">
            <p className="">{Props.name}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Person
