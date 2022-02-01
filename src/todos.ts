import { IToDo } from './types.js'
import { renderToast } from './lib.js'

export async function getTodosByCount(count: number) {
  const responseData = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then<IToDo[]>(response => { return response.json() });

  if (!count || !responseData.length) {
    renderToast(
      { text: 'Ваш список заданий пуст!', type: 'error' },
      { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
    )

    return;
  }

  const updatedData = responseData.slice(0, count) as IToDo[];
  updatedData.forEach((item: IToDo, index: number): void => {
    console.log(`Задание ${index}: ${item.title}`);
  })
}
