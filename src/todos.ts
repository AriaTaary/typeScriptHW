import { IToDo } from './types.js'
import { renderToast } from './lib.js'

function checkTodosData(obj: any): obj is IToDo[] {
  return obj.every((item: IToDo): boolean => {
    return !!item &&
      typeof item === "object" &&
      "userId" in item && "id" in item && "title" in item && "completed" in item
  });
}


export async function getTodosByCount(count: number) {
  const responseData = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => { return response.json() }) as unknown;
    // .then<IToDo[]>(response => { return response.json() }); // или так правильнее?

  if (!checkTodosData(responseData)) {
    renderToast(
      { text: 'Ошибка получения данных!', type: 'error' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )

    return;
  }

  if (!count || !responseData.length) {
    renderToast(
      { text: 'Ваш список заданий пуст!', type: 'error' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )

    return;
  }

  const updatedData = responseData.slice(0, count) as IToDo[];
  updatedData.forEach((item: IToDo, index: number): void => {
    // console.log(`Задание ${index}: ${item.title}`); // более красивый вид
    console.log(item);
  })
}
