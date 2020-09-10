import {takeLatest,put, all, call} from 'redux-saga/effects';
import UserActionTypes from '../../redux/user/user.types';
import {auth, googleProvider, createUserProfileDocument,getCurrentUser} from '../../clothing/firebase/firebase.utils';
import { googleSigninSuccess, googleSigninFailure, emailSigninSuccess, emailSigninFailure,signoutSuccess,signoutFailure,signUpSuccess,signUpFailure } from './user.action';

export function* getSnapshotFromUserAuth(user) {
  try{
  const userRef = yield call(createUserProfileDocument,user);
  const userSnapshot = yield userRef.get();
    yield put (emailSigninSuccess({id:userSnapshot.id,...userSnapshot.data}))
}catch(error){
    yield put (emailSigninFailure(error))
}
}

export function* signInWithGoogle() {
  try{
    const {user} = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument,user);
    const userSnapshot = yield userRef.get();
    yield put (googleSigninSuccess({id:userSnapshot.id,...userSnapshot.data}))
  }catch(error){
    yield put (googleSigninFailure(error))
  }
};

export function* signInWithEmailAndPassword({payload:{email,password}}) {
  try{
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    const userRef = yield call(createUserProfileDocument,user);
    const userSnapshot = yield userRef.get();
      yield put (emailSigninSuccess({id:userSnapshot.id,...userSnapshot.data}))
  }catch(error){
      yield put (emailSigninFailure(error))
  }
};

export function* signOut() {
  try{
    yield auth.signOut()
    yield put (signoutSuccess());
  }catch(error){
    yield put (signoutFailure(error));
  }
}

export function* signUp({payload:{email,password,displayName}}) {
  try{
    const {user} = yield auth.createUserWithEmailAndPassword(email,password);
    yield put (signUpSuccess({user,additionalData:{displayName}}))
  }catch(error){
      yield put (signUpFailure(error))
  }
};

export function* signInAfterSignUp({payload:{user,additionalData}}) {
  try{
    const  userRef = yield call(createUserProfileDocument,user,additionalData);
    const userSnapshot = yield userRef.get(); 
    yield put (emailSigninSuccess({id:userSnapshot.id,...userSnapshot.data}))
  }catch(error){
    yield put (emailSigninFailure(error))
  }
}

export function* isUserAuthenticated() {
  try{
      const userAuth = yield getCurrentUser();
      if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  }catch(error){
    yield put (emailSigninFailure(error))
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(
    UserActionTypes.GOOGLE_SIGNIN_START,
    signInWithGoogle
  )
};

export function* onEmailSigninStart() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGNIN_START,
    signInWithEmailAndPassword
  )
};

export function* onSignUpStart() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_START,
    signUp
  )
};
export function* onSignUpSuccess() {
  yield takeLatest(
    UserActionTypes.SIGN_UP_SUCCESS,
    signInAfterSignUp
  )
};

export function* onCheckUserSession() {
  yield takeLatest(
    UserActionTypes.CHECK_USER_SESSION,
    isUserAuthenticated
  )
}
export function* onSignoutStart() {
  yield takeLatest(
    UserActionTypes.SIGN_OUT_START,
    signOut
  )
};

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignoutStart),
    call(onCheckUserSession)
  ])
};