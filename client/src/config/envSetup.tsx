import axios from "axios";

export function getEnvironment() {
  console.log("Environment passed: ", import.meta.env.ENV);
  if (import.meta.env.VITE_ENV === "dev") {
    return "http://localhost:9000";
  } else {
    return "https://z3.martioli.com";
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
