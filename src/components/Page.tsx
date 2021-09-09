import React from 'react'
import People from './People'
import { useQuery } from '@apollo/client'
import { PAGE_QUERY } from './Queries'
import { useParams } from 'react-router-dom'

const Page: React.FC = () => {
  const { number }: { number: string } = useParams()
  const peoplePage = parseInt(number)

  const usePeople = () => {
    const { loading, error, data } = useQuery(PAGE_QUERY, {
      variables: { peoplePage }
    })

    return { loading, error, data }
  }

  return <People data={usePeople} currentPage={peoplePage} />
}

export default Page
