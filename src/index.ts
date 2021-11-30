const run = () => {
  const day =  process.argv[2]
  const part = process.argv[3]

  console.log(`Running: ${day}, ${part}`)
  console.log(`Result: `, require(`./${day}/${part}`).run())
}

run()