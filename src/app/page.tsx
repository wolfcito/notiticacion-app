import { PushChat } from "@/components/push-chat";
import { PushNotification } from "@/components/push-notification";


export default function Home() {
  return (
    <main>
      <PushNotification />
      <PushChat />
    </main>
  );
}
