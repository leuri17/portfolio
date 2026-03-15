import { CommandLineIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center">
      {/* <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px] animate-slow-glow"></div>
        <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-slow-glow"></div>
      </div> */}
      <main className="w-full max-w-5xl px-6 lg:px-8">
        {/* HEADER */}
        <header className="py-8">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-red-600 size-10 rounded-full bg-linear-to-br from-red-600 to-red-400 flex items-center justify-center transition-transform group-hover:scale-105">
              <HugeiconsIcon icon={CommandLineIcon} strokeWidth={3} className="shadow-[0_0_25px] shadow-red-400/45" />
            </div>
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>
        </header>

        {/* NAV */}

        {/* DOWNLOAD CV BTN */}
      </main>
    </div>
  );
}
