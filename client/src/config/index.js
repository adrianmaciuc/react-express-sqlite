import * as envSetup from "./envSetup";
import axios from "axios";

axios.defaults.baseURL = envSetup.getEnvironment();
if (import.meta.env.VITE_ENV === "dev") {
  console.log(`Back End Environment set: ${axios.defaults.baseURL}`);
}

// Health Check on Backend using axios
await envSetup.isBackEndAlive();

console.log("Global initialization complete");
