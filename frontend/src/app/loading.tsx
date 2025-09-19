// app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white uppercase">
        <h1 className='text-2xl text-center  lg:text-left truncate'>Espere un momento</h1>
      <div className="w-12 h-12 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
    </div>
  );
}
