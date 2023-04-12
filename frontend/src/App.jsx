import { Router } from "./routes/router";
import { Toaster } from "sonner";

function App() {
	return (
		<>
			<Toaster richColors position="top-right" />
			<Router />
		</>
	);
}

export default App;
