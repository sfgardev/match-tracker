import { BASE_URL } from './config'

export const instance: typeof fetch = (url, init) =>
  fetch(`${BASE_URL}/${url}`, init)
