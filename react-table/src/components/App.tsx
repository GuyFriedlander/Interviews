import { useEffect, useState } from 'react'
import Header from './Header'
import Table from './Table/Table'
import { getRows } from '../db/rows'

const App = () => {
  const [rows, setRows] = useState(getRows())
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredRows, setFilteredRows] = useState(rows)

  useEffect(() => {
    const regex = new RegExp(searchValue, 'i')

    setFilteredRows(
      rows.filter((row) => regex.test(row.name) || regex.test(row.email))
    )
  }, [searchValue, rows])

  const handleDelete = (toRemoveIds: readonly number[]) => {
    setRows((prevRows) =>
      prevRows.filter((row) => !toRemoveIds.includes(row.id))
    )
  }

  return (
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Table rows={filteredRows} handleDelete={handleDelete} />
    </div>
  )
}

export default App
