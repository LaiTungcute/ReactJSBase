import React from 'react'

class ClassC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          countTimer: 0,
          id: []
        };
        /*ignore bind for now we will explain about binding soon. 
          Just know that it is necessary for right working of 'this' keyword*/
        this.clickHandler = this.clickHandler.bind(this);
      }

      //Lifecycle components
      //componentDidMount: Thực hiện các thao tác khi đã đc mounting
      componentDidMount() {
          fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => this.setState({
            ...this.state,
            id: json
          }));
          
       this.timerId = setInterval(() => this.setState({
        ...this.setState,
        countTimer: this.state.countTimer + 1
      }),1000);
      }

      //componentWillUnmount: Trước khi unmounting cần clear các side effect có clearUp: VD setTimeOut, setInterval
      componentWillUnmount() {
        clearInterval(this.timerId);
      }

      //set state after handle events
      clickHandler() {
        this.setState({
          ...this.state,
          count: this.state.count + 1
        });
      }
      render() {
        return (
          <>
            <div>{this.state.count}</div>
            <div>{this.state.countTimer}</div>
            <button onClick={this.clickHandler}>Click</button>
            {
              this.state.id && this.state.id.map((item, id) => (
                <div key={id}>
                  {item.title}
                </div>
              ))
            }
          </>
        );
      }
}

export default ClassC;