import './App.css';
import { MyComponent } from './components/StepForm/motion';
import StepForm from './components/StepForm/StepForm';

function App() {
  return (
    <div className="App bg-blue-400 border-2">
      {/* <StepForm></StepForm>       */}
      <h1>Yoooo</h1>
      <div className='bg-white rounded-3xl w-[150px] h-[150px]'>
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
