/**
 * Design reminder — PassaAqui: marca urbana em azul-marinho e laranja; geometria de rota,
 * sinalização e descoberta. Evitar aparência genérica de software corporativo.
 */

type BrandMarkProps = {
  invert?: boolean;
  compact?: boolean;
};

export default function BrandMark({ invert = false, compact = false }: BrandMarkProps) {
  return (
    <div className={`brand-mark ${invert ? "brand-mark--invert" : ""}`} aria-label="PassaAqui">
      <img
        src="../../assets/logo/logo.webp"
        alt="Símbolo do PassaAqui"
        className="brand-mark__symbol"
        style={{ borderRadius: 52 }}
      />
      {!compact && (
        <span className="brand-mark__word" aria-hidden="true">
          passa<span>aqui</span>
        </span>
      )}
    </div>
  );
}
