import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false
    };
  }

  componentWillMount() {
    if(this.props.itemEditing && this.props.itemEditing.id !== null){
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.itemEditing){
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status
      });
    }else if(nextProps && nextProps.itemEditing === null){
      this.setState({
        id: '',
        name: '',
        status: false
      });
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
        value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name] : value
    });
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.onSaveTask(this.state);
    //cancel & close Form
    this.onClear();
    this.onCloseForm();

  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    });
  }

  render() {
    var { id } = this.state;
    if(!this.props.isDisplayForm) return null;
    return (
        <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title" >
          {id !== '' ? 'cập nhật công việc' : 'Thêm công việc'}
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSave}>
            <div className="form-group">
              <label>Tên :</label>
              <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
              />
            </div>
            <label>Trạng thái :</label>
            <select
                className="form-control"
                name="status"
                value={this.state.status}
                onChange={this.onChange}
            >
              <option value={true}>Hoàn Thành</option>
              <option value={false}>Đang Loading</option>
            </select><br/>
            <div className="text-center">
              <button 
                type="submit" 
                className="btn btn-warning"
              >
                <span className="fa fa-plus mr-5"></span>Lưu lại
              </button>
              <button 
                type="button" className="btn btn-danger"
                onClick={this.onClear}
                >
              <span className="fa fa-close mr-5"></span>Huỷ bỏ
              </button>
            </div>
            <button onClick={this.onCloseForm}>
            Close
          </button>
          </form>
        </div>
    </div>
   
    );
  }
}

const mapStateToProps = state => ({
  isDisplayForm : state.isDisplayForm,
  itemEditing : state.itemEditing
})

const mapDispatchToProps = (dispatch, props) => ({ 
    onSaveTask : (task) => {
      dispatch(actions.saveTask(task));
    },
    onCloseForm : () => {
      dispatch(actions.closeForm());
    }
 })

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
