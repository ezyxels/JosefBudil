import LogoCarousel from "containers/HomePage/LogoCarousel";

const firmy = [
  "Pfeifer Holz s.r.o", 
  "KV-Konstrukt stav s.r.o", 
  "Energo Hrdlička",
  "Restaurace Roští",
  "Club 21 Plzeň",
  "Stavaso Stav a.s",
  "Dřevovýroba Herout spol. s.r.o"
]

export default function LogoSection(){
  return(
    <section
      id="reference"
    >
       <div className="py-3 md:py-10 hidden sm:grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center bg-gray-200">
        {firmy.map((firma, index) => (
          <div className="h-40 flex justify-center items-center" key={index}>
            <p className="text-2xl text-center font-bold p-5">{firma}</p>
          </div>
        ))}
      </div>
      <div className="sm:hidden">
        <LogoCarousel textArray={firmy}/>
      </div>
  </section>
    
  );
}