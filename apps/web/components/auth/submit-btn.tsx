import cn from "@yeahx4/cn";

export default function AuthSubmit({ children }: { children: string }) {
  return (
    <button
      type="submit"
      className={cn(
        "w-full h-12 bg-gradient-to-r from-pink-400 to-purple-500",
        "hover:from-pink-500 hover:to-purple-600 text-white",
        "font-medium shadow-lg hover:shadow-xl transition-all duration-300",
        "ease-in-out",
        "hover:-translate-y-0.5 hover:scale-[1.02]",
        "disabled:opacity-50 disabled:cursor-not-allowed mt-8 rounded"
      )}
    >
      {children}
    </button>
  );
}
