import { parseInput } from "../utils/parseInput"

let increases: number = 0
const windowSize: number = 3

export const run = () => {
  const input: any = parseInput({ split: { delimiter: '\n' } })
  let windowSum: number = 0

  for (let i: number = 0; i < windowSize; i++) {
    windowSum += input[i]
  }


  let temp: number = 0
  for (let i: number = 1; i < input.length - 2; i++) {
    let diff = input[i + 2] - input[i - 1]
    temp = diff + windowSum
    if (temp > windowSum) increases++
    windowSum = temp

  }


  return increases
}
