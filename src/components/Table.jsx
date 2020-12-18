import React from 'react'

const Table = ({ }) => {
  const fieldNames = ['Id', 'Name']
  const data = [{id: 1, name: 'Zorkov'}, {id: 2, name: 'Nihilus'}]
  const tableHead = fieldNames.map(field => {
    <p>{ field } </p>
  })
  const tableBody = data.map(record => {
    return (
      <div>
        <p>{ record.id }</p>
        <p>{ record.name }</p>
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

export default Table
