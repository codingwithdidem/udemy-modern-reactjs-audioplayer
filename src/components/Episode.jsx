import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAudioPlayer } from "@/hooks/useAudioPlayer";
import { Play, Pause } from "lucide-react";

export default function Episode({ episode }) {
  const player = useAudioPlayer(episode);

  return (
    <Card className="flex gap-2 items-center p-4 rounded-xl mb-10">
      <CardContent className="flex flex-col items-start gap-3">
        <p className="text-2xl font-medium leading-none">{episode.name}</p>
        <p
          className="text-sm text-muted-foreground line-clamp-2 prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </CardContent>
      <CardFooter>
        <Button
          className="flex items-center justify-center gap-2"
          onClick={() => player.toggle()}
        >
          {player.playing ? <Pause /> : <Play />}
          <span className="ml-2">Play</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
