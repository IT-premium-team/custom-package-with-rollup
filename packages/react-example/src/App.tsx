import { useCallback } from 'react';

import {
  Button,
  Container,
  useHello,
  ErrorContextProvider,
  useErrorContext,
  convertDateToUnixTimestamp
} from "my-awesome-package";

import logo from './logo.svg';
import './App.css';

const SomeDummyThingExample = (): JSX.Element => {
  const {
    error,
    setError,
    clearError
  } = useErrorContext();

  const doSmthOnButtonBlur = (): void => {
    const nowTimestamp = convertDateToUnixTimestamp(new Date());
    console.info(`Current timestamp ${nowTimestamp}`);
  };

  const doSmthOnButtonClick = useCallback((): void => {
    if (error) {
      clearError();
    } else {
      setError("Some error!");
    }
  }, [error, clearError, setError]);

  useHello();

  return (
    <Container
      variant={"light"}
      paddings={"small"}
      contentAlignment={"col"}
      onBlur={() => {}}
    >
      <Button
        label={"Click me!"}
        onClick={doSmthOnButtonBlur}
        onBlur={doSmthOnButtonClick}
        variant={"joyful"}
      />

      { error && (
        <div>{ error }</div>
      ) }
    </Container>
  );
};

function App() {
  return (
    <ErrorContextProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SomeDummyThingExample />
        </header>
      </div>
    </ErrorContextProvider>
  );
}

export default App;
