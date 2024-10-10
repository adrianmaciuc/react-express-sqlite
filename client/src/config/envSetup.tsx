import axios from "axios";

export function getEnvironment() {
  const environment = import.meta.env.VITE_ENV;

  switch (environment) {
    case "dev":
      return "http://localhost:9000";
    case "mock":
      return "http://localhost:3000/";
    default:
      return "https://z3.martioli.com/";
  }
}

export async function isBackendAlive(): Promise<boolean> {
  try {
    await axios.get("/check");
    return true;
  } catch (error) {
    console.error("Backend health check failed", error);
    return false;
  }
}

export default getEnvironment;
