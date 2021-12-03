import { parseInput } from "../utils/parseInput"

let INDEX = 0

const removeMismatches = (arr: string[], val: string): string[] => arr.filter((binary) => binary[INDEX] === val)
const nrOfBin = (input: string[], bin: string): number => input.filter((curr: string) => curr[INDEX] === bin).length


const oxygenGeneratorRating = (input: string[]) => (nrOfBin(input, '1') < (input.length / 2)) ? removeMismatches(input, '0') : removeMismatches(input, '1')
const co2ScrubberRating = (input: string[]) => (nrOfBin(input, '0') > (input.length / 2)) ? removeMismatches(input, '1') : removeMismatches(input, '0')


export const run = (): number => {
  let input: any = parseInput({ split: { delimiter: '\n', mapper: false } })

  let gamma = input
  while (gamma.length > 1) {
    gamma = oxygenGeneratorRating(gamma)
    INDEX++
  }

  INDEX = 0

  let epsilon = input
  while (epsilon.length > 1) {
    epsilon = co2ScrubberRating(epsilon)
    INDEX++
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}