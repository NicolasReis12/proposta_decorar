/* eslint-disable @next/next/no-img-element */
// Recorta o símbolo da marca Caio Marketeiro a partir do logotipo oficial (PNG 1803×513).
// O símbolo ocupa a faixa horizontal de 0 a ~450px do arquivo.

type Variant = "branco" | "gradiente" | "sky" | "origem";

export default function BrandSymbol({ variant = "branco", className = "" }: { variant?: Variant; className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: "452 / 513" }} aria-hidden>
      <img src={`/brand/caio-${variant}.png`} alt="" className="absolute top-0 left-0 h-full w-auto max-w-none" />
    </div>
  );
}

export function BrandLogo({ variant = "gradiente", className = "" }: { variant?: Variant; className?: string }) {
  return <img src={`/brand/caio-${variant}.png`} alt="Caio Marketeiro Neuromarketing" width={1803} height={513} className={`h-auto ${className}`} />;
}
