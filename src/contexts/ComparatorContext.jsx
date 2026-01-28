import { createContext } from "react";

const ComparatorContext = createContext({
  comparators: [],
  toggleComparator: () => { },
  isInComparator: () => false,
  clearComparator: () => { }
})

export default ComparatorContext;