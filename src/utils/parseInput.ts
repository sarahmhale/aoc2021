import { readFileSync } from 'fs';

interface SplitOptions<T> {
  delimiter?: string;
  mapper?: ((e: string, i: number, a: string[]) => T) | false;
}
/**
 * Parse the input from {day}/input.txt
 * @param {SplitOptions} [split]
 */
 export function parseInput<T>({
  split,
}: { split?: SplitOptions<T> | false } = {}) {
  const input = readFileSync(
    `./src/${process.argv[2]}/input.txt`,
    {
      encoding: 'utf-8',
    }
  );

  if (split === false) return input;

  const splitted = input.split(split?.delimiter ?? '\n');
  const mapper = split?.mapper;

  return mapper === false
    ? splitted
    : splitted.map((...args) => mapper?.(...args) ?? Number(args[0]));
}