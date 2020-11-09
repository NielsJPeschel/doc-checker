import React, { useState } from 'react';
import Nav from './Components/Nav';
import SelectPage from './Components/SelectPage';
import UploadPage from './Components/UploadPage';
import CorrectPage from './Components/CorrectPage'
import ErrorPage from './Components/ErrorPage';
import FinishPage from './Components/FinishPage';
import CreatePage from './Components/CreatePage';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Stepper from 'react-stepper-horizontal'; // https://www.npmjs.com/package/react-stepper-horizontal


const App = () => {
  const orange = "#ff8400";
  const gray = "rgb(200,200,200)"
  const [state, setState] = useState({
    currStep: 0,
    data: null,
    format: null,
    formatSelected: false,
  });


 
  // setup fontawesome library
  return (
    <div>
      <Nav data = {state.data}/>
      <Switch>
        <Route
          path="/"
          render={(props) => (<SelectPage {...props} state = {state} setState={setState} exact />)}
          exact
        />
        <Route
          path="/upload"
          render={(props) => (<UploadPage {...props} state = {state} setState={setState} />)}
        />
        <Route
          path="/correct"
          render={(props) => (<CorrectPage {...props} state = {state} setState={setState} />)}
        />
        <Route 
          path="/finish"
          render={(props) => (<FinishPage {...props} state = {state} setState = {setState} />)}
        />
        <Route 
          path="/create"
          render={(props) => (<CreatePage {...props} state = {state} setState = {setState} />)}
        />
        <Route component= {ErrorPage}/>
      </Switch>
      <StepperWrapper>
        <Stepper
          size={10}
          circleFontSize={0}
          completeBarColor="#ff653b"
          defaultColor={gray}
          defaultBarColor={gray}
          activeColor="#ff653b"
          completeColor="#ff653b"
          completeTitleColor="black"
          activeTitleColor="black"
          currentColor="#ff653b"
          steps={
            [{ title: 'select' }, { title: 'upload' }, { title: 'correct' }, { title: 'finish' }]} activeStep={state.currStep}
          titleFontSize={12}
        />
      </StepperWrapper>
    </div>

  );
}
export default App;

const StepperWrapper = styled.div`
    width: 50%;
    margin: 40px auto 0;
`;

