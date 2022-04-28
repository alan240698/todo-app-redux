// action là một objec nhé 
// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     // payload chứa các thông tin data từ người dùng
//     payload: {}
// }

// Gio tạo ra một hàm return về action, mục đích để có nhiều action, thì chỉ cần gọi tới hàm này, không phải viết nhiều action
// ACTION này được dùng để add state mới vào kho dữ liệu trong file reducer.js
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

// Action này dùng để cập nhật state trong kho chung chỗ filters {search:'.....'}
export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text

    }

}