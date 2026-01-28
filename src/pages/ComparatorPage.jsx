import ComparatorContext from "../contexts/ComparatorContext"
import { useContext, useState } from "react"

export default function ComparatorPage() {

  const { comparators, toggleComparator, isComparator } = useContext(ComparatorContext)
  const [wine1, setWine1] = useState({})
  const [wine2, setWine2] = useState({})

  const fetchWine1 = () => {
    fetch(`http://localhost:3001/wines/${comparators[0]}`)
      .then(res => res.json())
      .then(data => setWine1(data.wine))
      .catch(error => console.error(error))
  }

  const fetchWine2 = () => {
    fetch(`http://localhost:3001/wines/${comparators[1]}`)
      .then(res => res.json())
      .then(data => setWine2(data.wine))
      .catch(error => console.error(error))
  }

  console.log(fetchWine1())
  console.log(fetchWine2())

  return (
    <>

    </>
  )
}