import { parseInput } from "../utils/parseInput"

let horizontal = 0
let vertical = 0

export const run = () => {
  const input: any = parseInput({ split: { delimiter: '\n', mapper: false } })
  input.map((curr: string) => {
    const [direction, steps] = curr.split(' ')

    if (direction === 'forward') horizontal += parseInt(steps)
    if (direction === 'up') vertical -= parseInt(steps)
    if (direction === 'down') vertical += parseInt(steps)
  })

  return horizontal * vertical
}