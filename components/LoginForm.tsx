"use client";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { signIn} from "@/lib/actions/Auth.action"
import { Button } from "@/components/ui/button"
import {useRouter} from "next/navigation"
import { toast } from "sonner"
import { auth } from "@/Firebase/client";
import { translateFirebaseError } from "@/lib/utils";
import {signInWithEmailAndPassword} from "firebase/auth";
import {SignInParams} from "@/types";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password);

      const idToken =  await userCredential.user.getIdToken();
      const uid = userCredential.user.uid;

      if(!idToken){
        toast.error('sign in failed');
        return
      }
      await signIn({email,idToken,uid} as SignInParams);

      router.push("/")

    } catch (err) {
      console.error("err",err)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const message = translateFirebaseError(err.message)
      toast.error(message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            className="form-input"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            name="password"
            type="password"
            className="form-input"
            placeholder="*******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  )
}
