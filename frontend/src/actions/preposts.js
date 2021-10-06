import * as api from '../api/pre_index';
import { PRE_FETCH_ALL, PRE_CREATE, PRE_UPDATE, PRE_DELETE } from '../constants/PreSchConstants';

export const getPrePosts = () => async (dispatch) =>  {
    try {
        const { data } = await api.fetchPrePosts();

        dispatch ({type: PRE_FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }  
}


export const getPrePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPrePost(id);
    dispatch({ type: "PRE_FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};
//fetch mem
// export const getPrePosts = () => async (dispatch) =>  {
//   try {
//       const { data } = await api.fetchPrePosts();

//       dispatch ({type: 'PRE_FETCH_ALL', payload: data });
//   } catch (error) {
//       console.log(error.message);
//   }  
// }


export const createPrePost = (prepost) => async (dispatch) =>  {
    try {
        const { data } = await api.createPrePost(prepost);

        dispatch ({type: PRE_CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }  
}

export const updatePrePost = (id, prepost) => async (dispatch) => {
    try {
      const { data } = await api.updatePrePost(id, prepost);
  
      dispatch({ type: PRE_UPDATE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  //like prepost
  export const likePrePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePrePost(id);
  
      dispatch({ type: PRE_UPDATE , payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  export const deletePrePost = (id) => async (dispatch) => {
    try {
      await api.deletePrePost(id);
  
      dispatch({ type: PRE_DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };