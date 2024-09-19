export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="relative bg-black-1 flex flex-col">
          <main>
              {children}
          </main>
      </div>
    );
  }