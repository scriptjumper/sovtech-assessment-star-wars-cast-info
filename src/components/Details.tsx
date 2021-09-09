import React, { useState } from 'react'
import axios from 'axios'
import { PERSON_QUERY } from './Queries'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

const Details: React.FC = () => {
  const { name }: { name: string; index: string } = useParams()

  const { loading, error, data } = useQuery(PERSON_QUERY, {
    variables: { name }
  })

  const [homeWorld, sethomeWorld] = useState('N/A')

  if (loading) return <p>Loading component</p>
  if (error) return <p>Error component</p>

  const imageURL: string = 'https://via.placeholder.com/400x550'
  const person = data.person[0]

  async function fetchHomeWorld() {
    await axios.get(person.homeworld).then((json) => sethomeWorld(String(json.data.name)))
  }

  fetchHomeWorld()

  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl opacity-75 mx-6 lg:mx-0 bg-gray-900">
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center "
            style={{ backgroundImage: `url(${imageURL})` }}></div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{person.name}</h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-yellow-400 opacity-25"></div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Height: {person.height}</p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Mass: {person.mass}</p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Gender: {person.gender}</p>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">Home World: {homeWorld}</p>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img src={imageURL} alt={person.name} className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block" />
      </div>
    </div>
  )
}

export default Details
