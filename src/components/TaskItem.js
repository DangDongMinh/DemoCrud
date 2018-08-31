import React, { Component } from 'react';
import * as actions from './../actions';
import { connect } from 'react-redux';
class TaskItem extends Component {

  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  }

  onDelete = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  }

  onEditTask = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  }

  render() {
    var {task, index}  = this.props;
    return (
        <tr>
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td className="text-center">
          <span 
            className={task.status === true ? 'label label-success' : 'label label-danger'}
            onClick={this.onUpdateStatus}
          >
            {task.status === true ? 'Hoàn thành' : 'Đang Loading'}
          </span>
        </td>
        <td className="text-center"> 
          <button 
            type="button" 
            className="btn btn-warning"
            onClick={this.onEditTask}
            >
            <span className="fa fa-pencil mr-5"></span>Sửa
          </button>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={this.onDelete}
            >
            <span className="fa fa-trash mr-5"></span>Xoá
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({

}) 

const mapDispatchToProps = (dispatch, props) => ({
  onUpdateStatus : (id) => {
    dispatch(actions.updateStatus(id));
  },
  onDeleteTask : (id) => {
    dispatch(actions.deleteTask(id));
  },
  onOpenForm : () => {
    dispatch(actions.openForm())
  },
  onCloseForm : () => {
    dispatch(actions.closeForm());
  },
  onEditTask : (task) => {
    dispatch(actions.editTask(task));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
