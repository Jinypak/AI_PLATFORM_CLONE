import Image from 'next/image'
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";

export default function Home() {
  return (
      <main>
        <h1>Main page</h1>
        <Button variant='outline'>Button</Button>
      </main>

  )
}
