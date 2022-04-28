import {createSelector} from 'reselect';
// export const todoListSelector = (state) => state.todoList; này trả về all rồi, giờ thêm điều kiện nên phải filter như bên dưới 
export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const todosRemainingSelector = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {
    return todoList.filter((todo) => {
        return todo.name.includes(searchText);
    })
})