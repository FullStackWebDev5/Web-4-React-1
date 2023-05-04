import './App.css';
import ChildComponent from './components/ChildComponent.js';

function App() {
  return (
    <div className='App'>
			<h1>App</h1>
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
			<ChildComponent />
		</div>
  );
}

export default App;

/*
	JSX: JavaScript + XML (Looks like HTML)
	- className instead of class
	- singleton tags: need to close those tags by using / towards the end

	Component:
	- Can be function (Functional component)
	- Can be class (Class based component - Not in your syllabus)
	- Returns JSX

	Export any component
	- export default [ComponentName];

	Import any component
	- import [ComponentName] from 'ComponentPath';

	Using Components
	- <ChildComponent></ChildComponent>
	- <ChildComponent />
*/
