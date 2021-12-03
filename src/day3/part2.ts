import { parseInput } from "../utils/parseInput"

let INDEX = 0
let NR_OF_ONES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const removeMismatches = (arr: string[], val: string): string[] => arr.filter((binary) => binary[INDEX] === val)


const getNrOfOnes = (curr: string): void => {
  if (curr.split('')[INDEX] === '1')
    NR_OF_ONES[INDEX] = NR_OF_ONES[INDEX] + 1
}


const working = (input: string[]) => {
  input.map((curr: string) => getNrOfOnes(curr))
  if (NR_OF_ONES[INDEX] >= (input.length / 2)) return removeMismatches(input, '1')
  else return removeMismatches(input, '0')
}

const workingEpsilon = (input: string[]) => {
  input.map((curr: string) => getNrOfOnes(curr))
  if (NR_OF_ONES[INDEX] < (input.length / 2)) return removeMismatches(input, '1')
  else return removeMismatches(input, '0')
}

export const run = () => {
  let gamma: any = parseInput({ split: { delimiter: '\n', mapper: false } })
  let epsilon: any = parseInput({ split: { delimiter: '\n', mapper: false } })

  while (gamma.length > 1) {
    NR_OF_ONES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    gamma = working(gamma)
    INDEX++
  }

  INDEX = 0

  while (epsilon.length > 1) {
    NR_OF_ONES = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    epsilon = workingEpsilon(epsilon)
    INDEX++
  }

  return parseInt(gamma, 2) * parseInt(epsilon, 2)

}