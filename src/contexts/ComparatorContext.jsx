import { createContext } from "react";

const ComparatorContext = createContext({
  comparators: [],
  toggleComparator: () => { },
  isInComparator: () => false
})

export default ComparatorContext;