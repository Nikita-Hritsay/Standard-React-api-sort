import React from 'react'

const Table = (props) => {
    return (
        <table className="table">
        <thead>
          <tr>
            <th onClick={props.onSort.bind(null, 'id')}>Id</th>
            <th onClick={props.onSort.bind(null, 'firstName')}>firstName</th>
            <th onClick={props.onSort.bind(null, 'lastName')}>lastName</th>
            <th onClick={props.onSort.bind(null, 'email')}>email</th>
            <th onClick={props.onSort.bind(null, 'phone')}>phone</th>
          </tr>
        </thead>
        <tbody>
          {props.smallData.map(
            item=>(
              <tr key={item.id + item.phone}>
                <td> {item.id} </td>
                <td> {item.firstName} </td>
                <td> {item.lastName} </td>
                <td> {item.email} </td>
                <td> {item.phone} </td>
              </tr>
            )
          )}
        </tbody>
        
      </table>
    )
}

export default Table;