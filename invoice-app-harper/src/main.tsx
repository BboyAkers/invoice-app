import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { App } from "./App";
import "./index.css";

const clientSideID = import.meta.env.VITE_LAUNCHDARKLY_CLIENT_SIDE_ID || "";

async function init() {
  const rootElement =
    document.getElementById("root") ?? document.getElementById("app");
  if (!rootElement || rootElement.innerHTML) return;

  const LDProvider = await asyncWithLDProvider({
    clientSideID: clientSideID || "600000000000000000000000",
    context: {
      kind: "user",
      key: "anonymous-user",
      anonymous: true,
    },
  });

  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <LDProvider>
        <App />
      </LDProvider>
    </StrictMode>,
  );
}

init();

