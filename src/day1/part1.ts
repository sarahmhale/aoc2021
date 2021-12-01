import { parseInput } from "../utils/parseInput"

let increases: number = 0

export const run = () => {
  const input: any = parseInput({ split: { delimiter: '\n' } })
  input.map((curr: number, i: number) => {
    if (i === 0) return
    if (curr > input[i - 1]) increases++
  })

  return increases
}
