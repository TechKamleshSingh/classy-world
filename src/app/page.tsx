import { BackgroundBoxesDemo } from '@/components/background'
import { FloatingNav } from '@/components/ui/floating-navbar'
import { navItems } from '@/lib/constant'
import { Button } from '@nextui-org/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FloatingNav navItems={navItems} />
      <Button>Hello from next ui</Button>
      <BackgroundBoxesDemo />
    </main>
  )
}
