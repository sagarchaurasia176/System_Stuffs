export default function LoadingLoader(){
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500" style={{animationDuration: '2s'}}>
        <span className="sr-only">Provisioning cloud resources...</span>
      </div>
    </div>
  );
};
