import React, { useState } from "react";
import EndView from "./components/EndView";
import LoadingView from "./components/LoadingView";
import StartView from "./components/StartView";

export default function App() {
  const [status, setStatus] = useState("start");
  switch (status) {
    case "start":
      return <StartView />;

    case "loading":
      return <LoadingView />;

    case "end":
      return <EndView />;

    default:
      return null;
  }
}
