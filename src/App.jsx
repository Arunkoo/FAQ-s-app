import "./App.css";
import Faqlist from "./component/Faqlist";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-poppins">FAQ App</h1>
      <Faqlist />
    </div>
  );
}

export default App;
