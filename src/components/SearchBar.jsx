export default function SearchBar({ value, onChange }) {

  return (
    <input
      className="input-search"
      name="search"
      type="text"
      placeholder="Cerca..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}