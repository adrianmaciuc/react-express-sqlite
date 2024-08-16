import { getEnvironment, isBackEndAlive } from "./envSetup.tsx";
import axios from "axios";

// Health Check on Backend using axios
axios.defaults.baseURL = getEnvironment();
isBackEndAlive();
