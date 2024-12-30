import { ProfileProps } from "~/utils/interface";

export default function Profile({ imageSrc, name, description,width, height }: ProfileProps) {
  return (
    <div className="grid max-w-xl grid-cols-1 justify-items-center gap-4 mb-4 mx-auto">
      <img
        src={imageSrc}
        alt={name}
        className="h-auto max-w-38 rounded-full overflow-hidden border-teal-600 border-4"
        width={width}
        height={height}
        
      />
      <div className="grid grid-cols-1 gap-2 text-center">
        <h1 className="font-mono font-semibold tracking-tighter dark:text-white text-slate-800 text-3xl md:text-4xl">
          {name}
        </h1>
        <p className="font-serif text-xl italic font-se eading-normal tracking-tight dark:text-slate-400 text-slate-700">
          {description}
        </p>
      </div>
    </div>
  );
}
