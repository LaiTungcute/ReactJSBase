import React from 'react'
import { CarContext } from './ClassContextProvide';


//Truyền dữ liệu vào cho component cần thiết
class ClassContext extends React.Component {

    //xét phương thức khởi tạo cho state

    render() {
        return (
            <CarContext.Consumer>
                {({counter, addToCart, downToCart}) => 
                    <div>
                        <h2>{counter}</h2>
                        <button onClick={addToCart}>Tang</button>
                        <button onClick={downToCart}>Giam</button>
                    </div>}
            </CarContext.Consumer>
        )
    }
}

export default ClassContext;