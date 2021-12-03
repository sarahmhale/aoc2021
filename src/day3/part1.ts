import { parseInput } from "../utils/parseInput"

const nrOfOnes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

export const run = () => {
  const input: any = parseInput({ split: { delimiter: '\n', mapper: false } })
  const length = input.length
  input.map((curr: string) => {
    const arr = curr.split('')
    arr.map((bin: string, i: number) => {
      if (bin === '1') nrOfOnes[i] = nrOfOnes[i] + 1
    })
  })

  let gamma = ''
  let epsilon = ''


  nrOfOnes.map(val => {
    if (val > (length / 2)) {
      gamma += '1'
      epsilon += '0'
    }
    else {
      gamma += '0'
      epsilon += '1'
    }

  })
  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}