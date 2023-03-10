import React from 'react';

export const CarContext = React.createContext();

//Tạo 1 Provider để lưu trữ
class ClassContextProvide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleAddToCart = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDownToCart = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <CarContext.Provider value={{
                counter: this.state.count,
                addToCart: this.handleAddToCart,
                downToCart: this.handleDownToCart
            }}>
                {this.props.children}
            </CarContext.Provider>
        )
    }
}

export default ClassContextProvide;