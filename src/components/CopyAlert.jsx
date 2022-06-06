export default function CopyAlert({ className }){
  return (
    <div 
      className={`ui-wrapper max-w-[512px] bg-white shadow-2xl rounded fixed top-32 left-1/2 -translate-x-1/2 py-8 px-5 ${className} transition-opacity ease-in-out duration-400 font-bold text-xl`}
      data-wrapper="sm"
    >Text byl zkopírován</div>
  );
}
