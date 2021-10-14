import {writable, readable} from 'svelte/store'
import data from './data.json'

export const posts = writable(data.data)

export const user = readable({
  name: "Mike",
  about: "Front-end web developer with 7+ years of experience"
})