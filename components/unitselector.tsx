import classNames from "clsx";

interface UnitSelectorProps {
  fahrenheit: boolean;
  setFahrenheit: (val: boolean) => void;
}

export default function UnitSelector({
  fahrenheit,
  setFahrenheit,
}: UnitSelectorProps) {
  return (
    <div className="flex flex-row self-end text-2xl">
      <span
        onClick={() => setFahrenheit(false)}
        className={classNames(
          "m-3 px-3 py-2 rounded-full font-bold cursor-pointer",
          {
            "text-white": fahrenheit,
            "bg-navy": fahrenheit,
            "bg-gray-300": !fahrenheit,
            "text-navy": !fahrenheit,
          }
        )}
      >
        ˚C
      </span>
      <span
        onClick={() => setFahrenheit(true)}
        className={classNames(
          "m-3 px-3 py-2 rounded-full font-bold cursor-pointer",
          {
            "text-white": !fahrenheit,
            "bg-navy": !fahrenheit,
            "bg-gray-300": fahrenheit,
            "text-navy": fahrenheit,
          }
        )}
      >
        ˚F
      </span>
    </div>
  );
}
