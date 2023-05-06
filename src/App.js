import './App.css';
import ChildComponent from './components/ChildComponent.js';

function App() {
  return (
    <div className='App'>
			<h1>App</h1>
			<ChildComponent />
		</div>
  );
}

export default App;





















/*
	## Creating React App: npx create-react-app react-1
	## Run React App: npm start

	JSX: JavaScript + XML (Looks like HTML)
	- className instead of class
	- singleton tags: need to close those tags by using / towards the end

	Component:
	- Can be function (Functional component)/ Can be class (Class based component - Not in your syllabus)
	- Returns JSX
	- Can be nested
	- Can be re-used

	Using Components
	- <ChildComponent></ChildComponent>
	- <ChildComponent />

	Export any component
	- export default [ComponentName];

	Import any component
	- import [ComponentName] from 'ComponentPath';

	./: Current folder
	../: Parent folder
	/ : Child folder
*/
