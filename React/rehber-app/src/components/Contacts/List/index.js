import { useState } from 'react'

function List({contacts}) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        );
    })
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <hr />
      <h4>Contact List</h4>
      <table className="list">
        <tr>
          <th>Name</th>
          <th>Phone Number</th>
        </tr>
        {filtered.map((contact, i) => (
          <tr key={i}>
            <td>{contact.fullname}</td>
            <td> {contact.phone_number}</td>
          </tr>
        ))}
      </table>
      <hr />
  
    </div>
  );
}

export default List
