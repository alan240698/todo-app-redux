
// Các giá trị mặt định
const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList:[
        {id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
        {id: 2, name: 'Learn Dance', completed: false, priority: 'Low'},
        {id: 3, name: 'Learn English', completed: false, priority: 'High'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log({state, action});
    // Kiểm tra xem action.type nó là hành động gì, dựa vào hành động đó thực thi 
    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    // Data load từ người dùng lên
                    action.payload
                ],
            }
        case 'filters/searchFilterChange':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    search: action.payload,
                },
            }

        default:
            return state;
    }
}

export default rootReducer;