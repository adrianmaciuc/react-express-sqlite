import axios from "axios";

export function getEnvironment() {
  console.log("Environment passed: ", import.meta.env.VITE_ENV);
  if (import.meta.env.VITE_ENV === "dev") {
    return "http://localhost:9000";
  } else {
    return "react-express-sqlite.railway.internal";
  }
}

export async function isBackEndAlive() {
  try {
    await axios.get("/api");
    console.log("Backend Health Check PASSED");
    return true;
  } catch (error) {
    console.warn("Backend Health Check fail", error);
    return false;
  }
}
