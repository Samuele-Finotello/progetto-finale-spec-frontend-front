export default function SearchBar({ value, onChange }) {

  return (
    <div className="text-center mt-30">
      <input
        className="input-search"
        name="search"
        type="text"
        placeholder="Cerca..."
        value={value}
        onChange={e => onChange(e.target.value)} />
    </div>
  )
}