import { renderBlock } from './lib.js'
import { ISearchResult } from './types.js'

export function renderSearchStubBlock () {
  renderBlock(
    'search-results-block',
    `
    <div class="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `
  )
}

export function renderEmptyOrErrorSearchBlock (reasonMessage: string) {
  renderBlock(
    'search-results-block',
    `
    <div class="no-results-block">
      <img src="img/no-results.png" />
      <p>${reasonMessage}</p>
    </div>
    `
  )
}

export function renderSearchResultsBlock(results: ISearchResult[]) {
  renderBlock(
    'search-results-block',
    `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list">
    ${results.forEach((result: ISearchResult) => {
    return `<li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            ${result.photos.forEach((photo: string) => {
    return `<img class="result-img" src="${photo}" alt="">`
  })}
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>${result.title}</p>
              <p class="price">${result.totalPrice}&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i>${result.coordinates.join(', ')}</div>
            <div class="result-info--descr">${result.details}</div>
            <div class="result-info--footer">
              <div>
                <button onclick=${bookHotel(result.id)}>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>`
  })}
    </ul>`
  )
}

function bookHotel(id: string): void {
  console.log(id);
}
