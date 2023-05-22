import { Logger } from 'tslog'

// For usage help, see docs: https://tslog.js.org/
export const namedLogger = (name: string) => new Logger({ name })

const log = new Logger({})

export const jsonLogger = new Logger()

export default log
