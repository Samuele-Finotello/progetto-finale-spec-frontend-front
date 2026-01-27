import { useSearch } from "../contexts/SearchContext"

export default function PinkCategory() {

  const { search, setSearch } = useSearch()

  return (
    <>
      <h1>Pink Wines</h1>
      <div className="text-center mt-30">
        <input className="input-search" type="text" placeholder="Cerca..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>
    </>
  )
}