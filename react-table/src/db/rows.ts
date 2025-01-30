import { faker } from '@faker-js/faker'
import { Row } from './model'

export const getRows = (size = 50): Row[] =>
  new Array(size).fill(null).map((_, index) => ({
    id: index,
    name: faker.name.fullName(),
    email: faker.internet.email(),
    age: faker.datatype.number({ min: 18, max: 63 }),
  }))
