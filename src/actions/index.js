import * as types from './../constants/ActionTypes';

export const listAll = () => ({ 
    type : types.LIST_ALL 
})

export const saveTask = (task) => ({
    type : types.SAVE_TASK,
    task
})

export const toggleForm = () => ({ 
    type : types.TOGGLE_FORM
})

 export const closeForm = () => ({ 
    type : types.CLOSE_FORM
})

 export const openForm = () => ({ 
    type : types.OPEN_FORM
})

 export const updateStatus = (id) => ({
     type : types.UPDATE_STATUS_TASK,
     id
})

export const deleteTask = (id) => ({
    type : types.DELETE_TASK,
    id
})

export const editTask = (task) => ({
    type : types.EDIT_TASK,
    task
})

export const filterTask = (filter) => ({
    type : types.FILTER_TASK,
    filter
})

export const searchTask = (keyword) =>({
    type : types.SEARCH_TASK,
    keyword
})

export const sortTask = (sort) => ({
    type : types.SORT_TASK,
    sort
})