import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren', './img/avatar.png', 3)
  renderSearchFormBlock('2022-2-20', '2022-2-22')
  renderSearchStubBlock()
})
