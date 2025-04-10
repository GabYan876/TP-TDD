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

  it('gère un séparateur personnalisé défini en début de chaîne', () => {
    expect(add("//;\n1;2")).toBe(3)
  })

  it('lève une erreur si un nombre négatif est présent', () => {
    expect(() => add("1,-2,3")).toThrow("Nombres négatifs non autorisés : -2")
  })

  it('lève une erreur avec tous les nombres négatifs dans le message', () => {
    expect(() => add("1,-2,-3,4")).toThrow("Nombres négatifs non autorisés : -2, -3")
  })

  it('ignore les nombres strictement plus grands que 1000', () => {
    expect(add("1\n2,1002")).toBe(3)
  })
  
  it('gère un séparateur personnalisé de plusieurs caractères', () => {
    expect(add("//[***]\n1***2***3")).toBe(6)
  })

  it('gère plusieurs séparateurs personnalisés', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6)
  })
})
