export const DiscountComp = () => {
  return (
    <div className="relative flex items-center justify-center max-w-xs mx-auto">
      {/* Main card */}
      <div className="relative bg-red-500 text-white -skew-4 px-8 py-5 shadow-lg rounded-tr-lg rounded-br-3xl rounded-tl-3xl z-999">
        <div className="-skew-x-6 text-center">
          <span className="absolute -top-8 left-4 -translate-x-1/2 bg-linear-to-b from-yellow-400 to-yellow-600 text-red-600 text-[10px] w-32 font-bold px-1 py-1 rounded-br-3xl rounded-tl-2xl z-10">
            OFERTA ESPECIAL
          </span>
          <div className="absolute -top-2.5 -left-[45.5%] bg-linear-70 from-amber-700 via-amber-400 to-red-500/20 w-4.5 h-4 -z-999 rounded-bl-2xl mask-r-to-5" />
          <div className="absolute rotate-45 -top-6 -left-[60%] bg-linear-tr from-amber-700 via-amber-400 to-amber-500/20 w-4.5 h-4 -z-999 rounded-bl-2xl mask-r-to-5" />

          <div className="flex font-extrabold leading-none">
            <div className="h-full">
              <span className="text-6xl skew-12">10</span>
            </div>
            <div className="flex-1">
              <span className="text-4xl skew-12">%</span>
              <span className="block text-sm font-semibold tracking-widest">
                OFF
              </span>
            </div>
          </div>

          <span className="absolute -bottom-7 -skew-1.9 left-1/2 -translate-x-1/2 w-22 bg-linear-to-b from-yellow-400 to-yellow-600 text-red-600 text-[10px] font-bold px-1 py-1">
            SOLO POR HOY
          </span>
        </div>
      </div>

      <div className="absolute w-6 h-6 top-0 -left-3 border-t-0" />

      {/* Decorative sparks */}
      <span className="absolute -bottom-2 left-14 border-25 border-r-4 border-l-[6px] border-l-transparent border-t-transparent border-r-transparent border-b-indigo-600 border-indigo-600 rotate-60" />
      <span className="absolute bottom-1 left-14 border-45 border-r-4 border-l-[6px] border-l-transparent border-t-transparent border-r-transparent border-b-indigo-600 border-indigo-600 rotate-85" />
      <span className="absolute top-0 left-15 border-25 border-r-4 border-l-[6px] border-l-transparent border-t-transparent border-r-transparent border-b-indigo-600 border-indigo-600 rotate-125" />

      <span className="absolute -top-3 right-17 border-25 border-r-4 border-l-[2px] border-l-transparent border-t-transparent border-r-transparent border-b-indigo-600 border-indigo-600 -rotate-125" />
      <span className="absolute top-0 right-14 border-45 border-r-4 border-l-[6px] border-l-transparent border-t-transparent border-r-transparent border-b-indigo-600 border-indigo-600 rotate-270" />
      <span className="absolute -bottom-2 right-16 border-25 border-r-4 border-l-[6px] border-l-transparent border-t-transparent border-r-transparent border-b-indigo-600 border-indigo-600 rotate-285" />
    </div>
  );
};
