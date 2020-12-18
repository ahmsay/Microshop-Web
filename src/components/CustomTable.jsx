import React from 'react'

const CustomTable = () => {
  const fieldNames = ['Id', 'Name']
  const data = [{id: 1, name: 'Zorkov'}, {id: 2, name: 'Nihilus'}]
  const tableHead = fieldNames.map(field => {
    return (
      <span key={ field }>{ field } </span>
    )
  })
  const tableBody = data.map(record => {
    return (
      <div key={ record.id }>
        <span>{ record.id } </span>
        <span>{ record.name } </span>
      </div>
    )
  })
  return (
    <div>
      { tableHead }
      { tableBody }
    </div>
  )
}

export default CustomTable
