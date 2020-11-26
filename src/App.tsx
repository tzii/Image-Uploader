import React, { useState } from "react";
import EndView from "./components/EndView";
import LoadingView from "./components/LoadingView";
import StartView from "./components/StartView";

export default function App() {
  const [status, setStatus] = useState("start");
  const [url, setURL] = useState("");
  switch (status) {
    case "start":
      return <StartView setStatus={setStatus} setURL={setURL} />;

    case "loading":
      return <LoadingView />;

    case "end":
      return <EndView setStatus={setStatus} url={url} />;

    default:
      return null;
  }
}
