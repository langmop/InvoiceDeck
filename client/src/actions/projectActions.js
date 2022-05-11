import * as api from '../api/index'

import { ADD_NEW_PROJECT } from './constants'

export const createProject =(project, openSnackbar) => async (dispatch) => {

    try {
        const { data } = await api.addProject(project)
        dispatch({ type: ADD_NEW_PROJECT, payload: data })
        openSnackbar("Project added successfully")

    } catch (error) {
        console.log(error)
    }
}

