import streams from '../apis/streams';
import { db } from '../apis/fbStreams';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => (dispatch, getState) => {
  const { userId } = getState().auth;
  // console.log(userId);
  db.collection('streams')
    .add({ ...formValues, userId })
    .then(docRef => {
      console.log('Stream Added! ID: ', docRef.id);
      history.push('/');
    })
    .catch(error => {
      console.error('Error adding document: ', error);
    });
};

export const fetchStreams = () => dispatch => {
  db.collection('streams').onSnapshot(snapshot => {
    let streams = [];
    snapshot.forEach(doc => {
      streams.push({ ...doc.data(), id: doc.id });
    });
    dispatch({ type: FETCH_STREAMS, payload: streams });
  });
};

export const fetchStream = id => dispatch => {
  db.collection('streams')
    .doc(id)
    .snapshot.forEach(doc => {
      dispatch({ type: FETCH_STREAMS, payload: { ...doc.data(), id: doc.id } });
    });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = id => dispatch => {
  db.collection('streams')
    .doc(id)
    .delete()
    .then(() => {
      dispatch({ type: DELETE_STREAM, payload: id });
      history.push('/');
      console.log('Document successfully deleted!');
    })
    .catch(error => {
      console.error('Error removing document: ', error);
    });
};
