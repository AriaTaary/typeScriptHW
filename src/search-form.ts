import { renderBlock, renderToast } from './lib.js'

export function renderSearchFormBlock(dateOfArrival: string, dateOfDeparture: string) {
  const today = new Date();
  const thisDay = today.getDate();
  const thisMonth = today.getMonth();
  const thisYear = today.getFullYear();

  const defaultDateOfArrival = new Date(thisYear, thisMonth, thisDay + 1);
  const defaultDateOfDeparture = new Date(thisYear, thisMonth, defaultDateOfArrival.getDate() + 2);
  const maximumDate = new Date(thisYear, thisMonth + 2, 0);

  if (new Date(dateOfArrival) < today) {
    renderToast(
      { text: 'Неподходящая дата въезда. Пожалуйста, введите другую.', type: 'error' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )
  } else if (new Date(dateOfDeparture) > maximumDate) {
    renderToast(
      { text: 'Неподходящая дата выезда. Пожалуйста, введите другую.', type: 'error' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )
  } else {
    renderBlock(
      'search-form-block',
      `
      <form>
        <fieldset class="search-filedset">
          <div class="row">
            <div>
              <label for="city">Город</label>
              <input id="city" type="text" disabled value="Санкт-Петербург" />
              <input type="hidden" disabled value="59.9386,30.3141" />
            </div>
            <!--<div class="providers">
              <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
              <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
            </div>--!>
          </div>
          <div class="row">
            <div>
              <label for="check-in-date">Дата заезда</label>
              <input id="check-in-date" type="date" value=${getHtmlValueDate(defaultDateOfArrival)} min=${getHtmlValueDate(today)} max=${getHtmlValueDate(maximumDate)} name="checkin" />
            </div>
            <div>
              <label for="check-out-date">Дата выезда</label>
              <input id="check-out-date" type="date" value=${getHtmlValueDate(defaultDateOfDeparture)} min=${getHtmlValueDate(today)} max=${getHtmlValueDate(maximumDate)} name="checkout" />
            </div>
            <div>
              <label for="max-price">Макс. цена суток</label>
              <input id="max-price" type="text" value="" name="price" class="max-price" />
            </div>
            <div>
              <div><button>Найти</button></div>
            </div>
          </div>
        </fieldset>
      </form>
      `
    )
  }
}


function getHtmlValueDate(date: Date) {
  if (date.getMonth() < 9) {
    return `${date.getFullYear()}-0${date.getMonth() + 1}-${date.getDate()}`;
  } else {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}
