import { Button } from "../components/Button";
import { Card } from "../components/Card";

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to Diffable</h1>
      <p>A structured code review platform for technical hiring.</p>
      <Button
        label="Get Started"
        onClick={() => console.log("clicked")}
        variant="primary"
      />
      <Card
        title="Sample Assignment"
        description="Review this code submission"
      />
    </main>
  );
}
