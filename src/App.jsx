/* eslint-disable react/display-name */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./app/globals.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Episodes from "./components/Episodes";
import { AudioProvider } from "./providers/AudioProvider";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col h-full w-full max-w-3xl mx-auto">
        <AudioProvider>
          <Episodes />

          <div className="fixed bottom-10 inset-x-0">
            <AudioPlayer />
          </div>
        </AudioProvider>
      </div>
    </QueryClientProvider>
  );
}
