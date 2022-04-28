import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4} from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
export default function TodoList() {
  // Tạo state 
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('Medium');

  // Function 
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  }
  const handlePriorityChange = (value) => {
    // Trả thẳng về value luôn, không cần e.target.value vì thẻ select option này nó để value rồi
    setPriority(value);
  }
  // Lấy dữ liệu ra từ kho chung
  // const todoList = useSelector((state) => state.todoList); // tuy nhiên cách này thì sẽ tốn nhiều đoạn code, vd chỗ khác cũng muốn lấy ra lại làm như cái này thì nhiều code
  const todoList = useSelector(todosRemainingSelector);
  // const searchText =  useSelector(searchTextSelector);
  // để lấy ra và sử dụng dispatch() cần import như bên trên và làm như bên dưới, tạo ra một biến và useDispatch() 
  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
      // Khi click vào button add, chúng ta sẽ dùng dispatch() để bắn đi một action
      // action đó bào gồm: type, và data nhận được từ người dùng
      dispatch(addTodo({
        // thêm các thông tin từ người dùng, là cục data mà hàm addTodo nhận đó keke
        id: uuidv4(),   // tạo id ngẫu nhiên và là duy nhất, import cái uuid như trên nha
        name: todoName,
        priority: priority,
        completed: false
      }));
      // Sau khi add xong, reset về giá trị mặc định input rỗng , và select là medium
      setTodoName('');
      setPriority('Medium');
  }
// KHI NHẬP VÀO THÔNG TIN VÀ NHẤN ADD THÌ NÓ SẼ GỌI ĐẾN THẰNG rootReducer trong reducer.js


  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
         todoList.map(todo => <Todo key={todo.id} name={todo.name} prioriry={todo.priority}/>)
        }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange}/>
          <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
