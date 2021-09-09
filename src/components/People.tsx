import React from 'react'
import { ApolloError } from '@apollo/client'
import Person from './Person'
import Pagination from './Pagination'
import Loading from './Loading'
import Error from './Error'

interface Props {
  data: CallableFunction
  currentPage: number
}

const People: React.FC<Props> = (Props) => {
  const {
    loading,
    error,
    data
  }: {
    loading: boolean | undefined
    error: ApolloError | undefined
    data: any
  } = Props.data()

  if (loading) return <Loading />
  if (error) return <Error />

  let people: Array<{ name: string }>

  data.allPeople ? (people = data.allPeople) : data.person ? (people = data.person) : (people = data.people)

  return (
    <section className="py-8">
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 ">
        {people.map(({ name }: { name: string }, index: number): string => (<Person key={index} name={name} index={index} />) as any)}
      </div>

      <Pagination currentPage={Props.currentPage} />
    </section>
  )
}

export default People
