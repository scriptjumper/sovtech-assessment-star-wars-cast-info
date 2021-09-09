import * as React from 'react'

import { Formik, Form, Field } from 'formik'
import { useHistory, Link } from 'react-router-dom'

interface MyFormValues {
  search: string
}

const Header: React.FC = () => {
  const initialValues: MyFormValues = { search: '' }

  let history = useHistory()

  const handleSubmit = (search: string) => {
    history.push(`/search/${search}`)
  }

  return (
    <div className="text-black">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />

      <div className="w-screen flex flex-row items-center p-1 justify-between bg-gray-400 shadow-xs">
        <div className="ml-8 text-lg text-gray-100 hidden md:flex">
          <Link className="flex items-center font-bold " to="/">
            People<span className="text-yellow-400">@</span>Star Wars
          </Link>
        </div>

        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            handleSubmit(values.search)
            actions.setSubmitting(false)
          }}>
          <Form className="w-screen md:w-1/5 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex bg-gray-100">
            <label htmlFor="search"></label>

            <Field className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none" id="search" name="search" placeholder="Search" />

            <button type="submit" className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Header
