import { describe, it, expect } from 'vitest'
import { add } from '../src/add.js'

describe('add', () => {
  it('retourne 0 pour une chaîne vide', () => {
    expect(add("")).toBe(0)
  })

  it('retourne le nombre si un seul est fourni', () => {
    expect(add("1")).toBe(1)
  })

  it('retourne la somme de deux nombres', () => {
    expect(add("1,2")).toBe(3)
  })

  it('retourne la somme de plusieurs nombres', () => {
    expect(add("1,2,3,4,5")).toBe(15)
  })

  it('gère les retours à la ligne comme séparateurs', () => {
    expect(add("1\n2,3")).toBe(6)
  })  
})
