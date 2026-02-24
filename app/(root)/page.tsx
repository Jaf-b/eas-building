import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";

export default function home() {
  return (
      <main className="h-screen w-full flex-center flex-col gap-2">
        <h1>welcome to eas building</h1>
        <h2>welcome to eas building</h2>
        <h3>welcome to eas building</h3>
        <Button>Welcome</Button>
          <Card>
              <CardContent>
                  <h3>Salut le monde !</h3>
              </CardContent>
          </Card>
      </main>
  );
}
