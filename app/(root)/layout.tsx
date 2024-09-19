import LeftSidebar from "@/components/LeftSidebar";
import MobileNav from "@/components/MobileNav";
import Rightsidebar from "@/components/Rightsidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative bg-black-1 flex flex-col">
        <main className="relative flex bg-black-3">
            <LeftSidebar />
            <section className="border-2 border-black-1 flex min-h-screen flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
                <div className="flex h-16 items-center justify-between md:hidden">
                 <Image 
                    src="/icons/applogo2.png"
                    width={130}
                    height={130}
                    alt='menu icon'
                 />
                  <MobileNav/>
                </div>
                <div className="flex flex-col md:pb-14">
                  Toaster S
                  {children}
                </div>
              </div>
            </section>
            <Rightsidebar />
        </main>
    </div>
  );
}