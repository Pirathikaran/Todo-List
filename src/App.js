import React, {Component} from 'react';
import { v4 as uuidV4 } from 'uuid';
import  './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInputHandle from "./Todo-Input-handle";
import TodoListView from "./Todo-List-View";

class App extends Component {
    constructor(props) {
        super(props);
       this.state={
            activities:[],
            id : uuidV4(), //Generate random unique id
            activity:'',    // Test string
           editActivity:false, //Edit activity check variable
           checkTask:false // Complete task check variable
        };
    }

    // handling the input field taking value
  handleInputChange=(event)=>{
       this.setState({
           activity:event.target.value
       });
    }

    // Complete task and handling the array
  CompletedTaskCheck =(id)=>{
      const checkedTask = this.state.activities.find(task => task.id === id);
      checkedTask.checkTask = true;

      const newCheckedTaskArray = this.state.activities.filter(task => task.id !== id);
      this.setState({
          activities: [...newCheckedTaskArray, checkedTask]
          //add to complete task text should go down
      });
  }

  //handle the submit event and handling the input field as new one
  handleInputSubmit=(event)=>{
        event.preventDefault();
        const newActivity={
            id:this.state.id,
            title:this.state.activity
        }
      //create the list appear on the first list elements
      const updatedActivities=[newActivity,...this.state.activities,]
      this.setState({
          activities:updatedActivities,
          activity:'',
          id:uuidV4(),
          editActivity:false,
          checkTask:false
      });

    }

    // delete all tasks
  handleActivitiesClear=(event)=>{
        this.setState({activities:[]})
    }

    //delete unique list
  handleActivityDelete=(id)=>{
        const filterActivity=this.state.activities.filter(event => event.id !== id);
        this.setState({
            activities:filterActivity
        });
    }

    // edit unique task and updating
  handleActivityEdit=(id)=>{
      const filterEditActivity=this.state.activities.filter(event => event.id !== id);
      const selectedItem=this.state.activities.find(event=> event.id === id);
      this.setState({
          activities:filterEditActivity,
          activity:selectedItem.title,
          id:id,
          editActivity:true,


      });
  }

    render() {

    return (
        <div className="container" id="app1">
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center text-white">TODO LIST</h3>
                    {/* pass the child to use these function  */}
                    <TodoInputHandle activity={this.state.activity}
                                     handleInputChange={this.handleInputChange}
                                     handleInputSubmit={this.handleInputSubmit}
                                     editActivity={this.state.editActivity}
                    />
                </div>

                <div className="col-md-6" id="ex1">
                    {/* pass the child to use these function  */}
                    <TodoListView activities={this.state.activities}
                                  handleActivitiesClear={this.handleActivitiesClear}
                                  handleActivityDelete={this.handleActivityDelete}
                                  handleActivityEdit={this.handleActivityEdit}
                                  CompletedTaskCheck={this.CompletedTaskCheck}
                    />
                </div>
                </div>
            </div>
    );
  }
}



export default App;
