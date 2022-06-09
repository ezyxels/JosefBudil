export default function HeroPanel() {
  return (
    <div
      as="div"
      className="ui-wrapper mx-auto py-10 px-5 sm:px-0 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 absolute left-1/2 -translate-x-1/2 -bottom-112 sm:-bottom-32 md:bottom-0 sm:translate-y-1/2 bg-white shadow-2xl divide-gray-500 divide-solid divide-y-1 sm:divide-y-0 lg:divide-x-1"
      data-wrapper="lg"
    >
      <div className="ui-heading text-secondary flex items-center uppercase p-6 lg:py-4 mb-8 xs:mb-0 h-full">
      <p className="w-full">Revize</p>
      </div>
      <div className="ui-heading text-secondary flex items-center uppercase p-6 lg:py-4 mb-8 xs:mb-0 h-full">
      <p className="w-full">Koordinátor BOZP na staveništi</p>
      </div>
      <div className="ui-heading text-secondary flex items-center uppercase p-6 lg:py-4 mb-8 xs:mb-0 h-full">
      <p className="w-full">Požární ochrana</p>
      </div>
      <div className="ui-heading text-secondary flex items-center uppercase p-6 lg:py-4 mb-8 xs:mb-0 h-full">
        <p className="w-full">Bezpečnost a ochrana zdraví při práci</p>
      </div>
    </div>
  );
}