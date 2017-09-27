import React, { Component } from "react";

class Todo extends Component{
  render(){
    return(
      <section id="todo" className="bg-light">
        <div className="container" >
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Todo</h2>
              <p className="lead">All of your todo’s for today: Friday 22.03.2017</p>
              <br></br>
              <p><strike>[X] Finish this react page</strike></p>
              <p>[ ] Run on the treadmill</p>
              <p>[ ] Read pages 23-43 in the Calculus book.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Todo;
