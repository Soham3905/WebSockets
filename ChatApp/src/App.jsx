function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Chat App
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">
            Welcome..!
          </h1>
        </div>

        <div className="space-y-4 bg-slate-50 px-6 py-6">
          <div className="max-w-xs rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
            Hello! Welcome to the chat.
          </div>

          <div className="ml-auto max-w-xs rounded-2xl bg-slate-900 px-4 py-3 text-sm text-white shadow-sm">
            Hi, this looks clean and simple.
          </div>

          <div className="max-w-xs rounded-2xl bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
            That was the goal.
          </div>
        </div>

        <div className="flex gap-3 border-t border-slate-200 px-6 py-5">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
          />
          <button
            type="button"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
