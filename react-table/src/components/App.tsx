import { useEffect, useState } from 'react'
import Header from './Header'
import Table from './Table/Table'
import { getRows } from '../db/rows'

const App = () => {
  const [rows] = useState(getRows())
  const [searchValue, setSearchValue] = useState<string>('')
  const [filteredRows, setFilteredRows] = useState(rows)

  useEffect(() => {
    const regex = new RegExp(searchValue, 'i')

    setFilteredRows(
      rows.filter((row) => regex.test(row.name) || regex.test(row.email))
    )
  }, [searchValue, rows])

  return (
    <div>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Table rows={filteredRows} />
    </div>
  )
}

export default App
