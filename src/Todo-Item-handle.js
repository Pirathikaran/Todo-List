import React, {Component} from 'react';

class TodoItemHandle extends Component {
    render() {
        //destructuring
        const {title,handleActivityDelete,handleActivityEdit,checkTask,CompletedTaskCheck}=this.props;
        //show complete task with cut line
        const cutLine = {
            textDecoration: 'line-through'
        }
        return (
            <div className="list-group-item text-capitalize d-flex justify-content-between my-2">
                {/* check cut line css executing */}
                <h6 style={checkTask ? cutLine :null}>{title}</h6>
            <div className="todo-icon">
                <span className="mx-2 text-success" onClick={handleActivityEdit}><i className="fas fa-pen"/></span> {/* icon  edit*/}
                <span className="mx-2 text-danger" onClick={handleActivityDelete}><i className="fas fa-trash"/></span>{/* icon  delete*/}
                <span className="mx-2 text-primary" onClick={CompletedTaskCheck}><i className="fas fa-book" /></span> {/* icon  Complete task*/}

            </div>

            </div>
        );
    }
}

export default TodoItemHandle;