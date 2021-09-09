import React from 'react'
import People from './People'
import { useQuery } from '@apollo/client'
import { PERSON_QUERY } from './Queries'
import { useParams } from 'react-router-dom'

const Search: React.FC = () => {
  const { name }: { name: string } = useParams()

  const usePeople = () => {
    const { loading, error, data } = useQuery(PERSON_QUERY, {
      variables: { name }
    })
    return { loading, error, data }
  }

  return <People data={usePeople} currentPage={1} />
}

export default Search
