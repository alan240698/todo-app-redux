1. Cài đặt redux để có thể sử dụng được trong ứng dụng react
->yarn add redux react-redux
2. Tạo folder src/redux, tạo thêm file src/redux/store.js
- Bên trong file store.js:
import {createStore} from 'redux';
const store = createStore(rootReducer);
/**
hàm createStore nhận vào 3 tham số đó là rootReducer(là một function), initValue (các giá trị mặc định), enhancers (dùng cấu hình các middleware)
Hiện tại chỉ dùng rootReducer
**/
export default store;
3. Tạo file src/redux/reducer.js với nội dung bên trong gồm:
/**
Tham số 1: là một state 
Tham số 2: là một action 
**/
const rootReducer = (state, action) => {
    .....
}

Vào store import rootReducer vào;
4. Làm sao để liên kết cái store với UI
import store from "./redux/store";
import {Provider} from 'react-redux';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

5. Tạo file src/redux/actions.js
6. yarn add uuid

7. Cài đặt redux-extension 
-> cài đặt cái google adtension redux nha
-> yarn add redux-devtools-extension 
8. Vào src/redux/store.js thêm 
import { composeWithDevTools } from 'redux-devtools-extension';
const composedEnhancers = composeWithDevTools();
9. Dùng useSelector() 
-> Hiểu đơn giản selector là một function dùng để lấy dữ liệu tưng phần dữ liệu ở trong kho chung
ví du: kho chung trong reducer.js gồm: filters, todoList
- tạo thêm file src/redux/selectors.js

10. yarn add reselect 
-> giúp cho viết lồng các select rất tiện và dễ nhìn