import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { IStore } from 'interfaces/reducerInterfaces';
import * as React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../reducers/server/boilerplateReducer';

const { useEffect } = React;

interface IBoilerplateProps{
  fetch: () => void,
  data: any
}
function Boilerplate(props: IBoilerplateProps) {
  const { fetch,  data } = props;

  useEffect(()=>{
    fetch();
  },[fetch]);

  return (
    <div>
      <p>Boilerplate</p>
      <div> Id: {data.id} </div>
      <div> Name: {data.name} </div>
      <div> Type: {data.type} </div>
    </div>
  );
}

const mapStateToProps = ({boilerplate}: IStore) => ({
  data: boilerplate?.data
});

const mapDispatchToProps = (dispatch: ThunkDispatch<unknown, unknown, AnyAction>) => ({
  updateStore: (payload:IBoilerplateProps) => dispatch(actions.update(payload)),
  fetch: () => dispatch(actions.fetchSaga()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boilerplate);
