import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { setLocalData, getUserData, getFavoritesAmount, renderUserBlock } from './user.js'

window.addEventListener('DOMContentLoaded', () => {
  setLocalData(),
  renderUserBlock(getUserData().username, getUserData().avatarUrl, getFavoritesAmount().count)
  renderSearchFormBlock(new Date(2022, 1, 20), new Date(2022, 1, 22))
  renderSearchStubBlock()
})
