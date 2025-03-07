import "./App.css";
import RecipeVisualizer from "./components/ui/RecipeVisualizer";
import SingleFileUploader from "./components/ui/SingleFileUploader";

function App() {
  return (
    <div className="">
      <header className="p-4 bg-neutral-100 rounded-2xl">
        <h1 className="text-2xl font-bold">
          Lineage: Workato recipe visualizer
        </h1>
      </header>
      <RecipeVisualizer />
      <SingleFileUploader />
    </div>
  );
}

export default App;
