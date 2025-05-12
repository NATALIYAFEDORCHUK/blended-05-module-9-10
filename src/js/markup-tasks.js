export function taskTemplate({name, description, id}){
    return ` <li class="task-list-item" id="${id}">
          <button class="task-list-item-btn">Delete</button>
          <h3>${name}</h3>
          <p>${description}</p>
        </li>`
  }