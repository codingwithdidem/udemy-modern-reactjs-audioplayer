import { Play, Pause } from "lucide-react";
import { Button } from "../ui/button";

export default function PlayButton({ isPlaying, onPlayToggle }) {
  let Icon = isPlaying ? Pause : Play;
  return (
    <Button onClick={onPlayToggle}>
      <Icon />
    </Button>
  );
}
