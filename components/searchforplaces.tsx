interface SearchForPlacesProps {}

export default function SearchForPlaces(props: SearchForPlacesProps) {
  return (
    <div className="w-1/3 bg-navy">
      <div className="flex flex-col justify-start items-center">
        <div className="w-full p-5">
          <button className="absolute right-0 bg-navy text-white font-bold">
            X
          </button>
        </div>
        <div className="flex flex-row justify-between">
          <input
            type=""
            className="border border-white px-4 py-2 bg-transparent text-white"
          />
        </div>
      </div>
    </div>
  );
}
