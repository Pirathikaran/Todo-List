import React, {Component} from 'react';

class TodoInputHandle extends Component {
    render() {
        //destructuring
        const {activity,handleInputChange,handleInputSubmit,editActivity}=this.props;
        return (
            <div className="card card-body my-3">
                {/*form start*/}
                <form onSubmit={handleInputSubmit}>
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <i className="fas fa-book"></i>  {/*Input field side icon*/}
                            </div>
                        </div>
                        {/*input field*/}
                        <input type="text" className="form-control text-capitalize " placeholder="add todo Activities"
                        value={activity} onChange={handleInputChange}/>
                    </div>

                    {/*Submit button*/}
                    {/*1.check empty task then display submit button*/}
                    {/*2.check edit activity true then display button name edit and change color*/}
                    <button disabled={activity ? false :true}
                            type="submit"
                            className={editActivity ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
                        {editActivity ? "Edit Task ": "Submit"}</button>

                </form>
                {/*form end*/}


            </div>
        );
    }
}

export default TodoInputHandle;