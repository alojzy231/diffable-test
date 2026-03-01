import { Button } from "../components/Button";
import { formatDate } from "../utils/helpers";

export default function HomePage() {
  const today = formatDate(new Date());

  return (
    <main>
      <h1>Welcome to Diffable</h1>
      <p>The best structured code review platform for technical hiring teams.</p>
      <p className="date">Today is {today}</p>
      <Button onPress={() => console.log("clicked")} intent="primary">
        Get Started
      </Button>
    </main>
  );
}
