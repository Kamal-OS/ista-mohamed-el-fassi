import Loader from "@/components/Loader";

function LoadingScreen() {
  return (
    <div className="flex h-svh w-svw items-center justify-center bg-gray-100">
      <Loader />
    </div>
  );
}

export default LoadingScreen;
