import React, {Component} from 'react';
import TodoItemHandle from './Todo-Item-handle';

class TodoListView extends Component {
    render() {
        //destructuring
        const {activities,handleActivitiesClear,handleActivityDelete,handleActivityEdit,CompletedTaskCheck}=this.props
        return (
           <div className="list-group my-5">
               <h3 className="text-center text-white "> Task Manager </h3>
               {/* manipulating array  */}
               {activities.map( activity=>{
                   return (
                       <TodoItemHandle key={activity.id}
                                       title={activity.title}
                                       handleActivityDelete={()=>handleActivityDelete(activity.id)}
                                       handleActivityEdit={()=>handleActivityEdit(activity.id)}
                                       CompletedTaskCheck={()=>CompletedTaskCheck(activity.id)}
                                       checkTask={activity.checkTask}
                       >
                       </TodoItemHandle>)})}
               {/*clear button to delete all*/}
                       <button type="button" className="btn btn-danger btn-block text-uppercase mt-5" onClick={handleActivitiesClear}>Clear List</button>

           </div>
        );
    }
}

export default TodoListView;