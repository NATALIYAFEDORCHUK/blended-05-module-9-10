export const storage = () => JSON.parse(localStorage.getItem('todos')) || [];

export function addLocalStorage(data){
    localStorage.setItem('todos', JSON.stringify(data));
  }