import FloatingMenu from "./components/common/FloatingMenu";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/common/ErrorBoundary";


function App() {
  return (
    <div className="font-sans">
      <ErrorBoundary>
        <AppRoutes />
        <FloatingMenu />
      </ErrorBoundary>
    </div>
  );
}

export default App;