export default function LoadingComponent() {
  return (
    <div className="w-full h-full fixed backdrop-blur-sm bg-white/30 z-40 inset-0">
      <div className="fixed w-[90%] md:w-[50%] bg-white rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 backdrop-brightness-50">
        <h1 className="text-black font-montserrat-bold text-[1.5rem] text-center py-[70px]">
          tunggu sebentar ...
        </h1>
      </div>
    </div>
  );
}
