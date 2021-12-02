import { parseInput } from "../utils/parseInput"

let horizontal = 0
let vertical = 0
let aim = 0

export const run = () => {
  const input: any = parseInput({ split: { delimiter: '\n', mapper: false } })
  input.map((curr: string) => {
    const [direction, steps] = curr.split(' ')
    if (direction === 'forward') {
      horizontal += parseInt(steps)
      vertical += aim * parseInt(steps)
    }
    if (direction === 'up') aim -= parseInt(steps)
    if (direction === 'down') aim += parseInt(steps)
  })

  return horizontal * vertical
}