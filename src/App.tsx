import "../global.css";
import "../light.css";
import "../dark.css";
import ThemeSwitch from "./Components/ThemeSwitch";

function App() {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Unbounded:wght@500&display=swap');
      </style>

      <div className="w-screen flex justify-between items-center bg-background-default px-8 py-4 text-foreground-contrast">
        <span className="font-unbounded text-xl font-medium">
          Polkadot Theme
        </span>
        <ThemeSwitch />
      </div>
    </>
  );
}

export default App;
