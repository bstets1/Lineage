import "./App.css";
import RecipeVisualizer from "./components/ui/RecipeVisualizer";

function App() {
  return (
    <div className="min-h-screen">
      <header className="p-4 bg-white-800">
        <h1 className="text-2xl font-bold">
          Lineage: Workato recipe visualizer
        </h1>
      </header>
      <RecipeVisualizer />
    </div>
  );
}

export default App;
