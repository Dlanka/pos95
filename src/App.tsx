function App() {
  return (
    <>
      <div className="flex flex-col h-[calc(100vh-theme(spacing.16))] mt-16 ml-[240px]">
        <header className="flex items-center w-full h-16 pl-4 pr-4 fixed top-0 left-0 ">
          head
        </header>

        <aside className="w-[240px] h-[calc(100vh-theme(spacing.16))] top-16 left-0 fixed "></aside>

        <main className="flex-1 flex h-full overflow-hidden p-4 pt-0">
          <div className="rounded-2xl bg-white h-full overflow-y-auto w-full">
            <div style={{ height: "1200px" }}></div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
