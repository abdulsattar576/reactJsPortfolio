const BlobAnimation = () => {
  return (
    <div className="relative w-96 h-96">
      <div className="absolute top-0 left-0 w-full h-full bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    </div>
  );
};

export default BlobAnimation;