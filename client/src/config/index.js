import * as envSetup from "./envSetup";
import axios from "axios";

axios.defaults.baseURL = envSetup.getEnvironment();
console.log(`Back End Environment set: ${axios.defaults.baseURL}`);

// Health Check on Backend using axios
envSetup.isBackEndAlive();

console.log("Global initialization complete");
