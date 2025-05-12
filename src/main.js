/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/


import { storage} from './js/localStorageApi';
import { addMarkup } from './js/renderTasks';
import { taskTemplate } from './js/markup-tasks';
import { formInput, ul, themeChang } from './js/refs';
import { removeTodo, onSubmit } from './js/tasks';
import { changeTheme } from './js/theme-switcher';



if(storage() !== null){
  addMarkup(storage().map(taskTemplate).join(''))
}

formInput.addEventListener('submit', onSubmit);
ul.addEventListener('click', removeTodo);

themeChang.addEventListener('click', changeTheme);

