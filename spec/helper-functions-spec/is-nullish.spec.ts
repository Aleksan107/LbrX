import { isEmpty } from 'lbrx/helpers'

describe('Helper Function - isNullish():', () => {

  it('should return true for null.', () => {
    expect(isEmpty(null)).toBeTruthy()
  })

  it('should return true for undefined.', () => {
    expect(isEmpty(undefined)).toBeTruthy()
  })

  it('should return false for 0.', () => {
    expect(isEmpty(0)).toBeFalsy()
  })

  it('should return false for empty string.', () => {
    expect(isEmpty('')).toBeFalsy()
  })
})
