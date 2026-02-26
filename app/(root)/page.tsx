import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import StorageStatus from "@/components/StorageStatus";

export default function home() {
  return (
      <main className="h-screen w-full flex gap-2 justify-between p-3">
          <div className="h-screen w-full flex-center flex-col gap-2">
          </div>
          <div className="h-[80vh] w-full hidden sm:flex  justify-end">
              <StorageStatus/>
          </div>
      </main>
  );
}
