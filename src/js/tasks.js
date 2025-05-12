import { v4 as uuidv4 } from 'uuid';
import { addLocalStorage, storage } from './localStorageApi';
import { addMarkup } from './renderTasks';
import { taskTemplate } from './markup-tasks';

export function removeTodo(event){
    if(event.target.nodeName !== 'BUTTON'){
return;
    }
   const data = storage();
    const filteredTodos = data.filter(item => item.id !== event.target.parentNode.id);
    addLocalStorage(filteredTodos);
    event.target.parentNode.remove();
}

export function onSubmit(event){
    event.preventDefault();
    const {taskName, taskDescription} = event.currentTarget.elements;
    const newTask = {
      name: taskName.value,
      description: taskDescription.value,
      id: uuidv4(),
    }
    const data = storage()
  data.push(newTask);
  addLocalStorage(data);
  
    addMarkup(taskTemplate(newTask));
    event.currentTarget.reset();
  }