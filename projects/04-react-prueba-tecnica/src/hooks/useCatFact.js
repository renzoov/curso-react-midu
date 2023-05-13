import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshfact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  useEffect(refreshfact, [])

  return { fact, refreshfact }
}
