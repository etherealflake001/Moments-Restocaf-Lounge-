// Signature motion element for Moments.
// Soft, out-of-focus warm-light circles that drift slowly — evoking
// candlelight / string-lights bokeh, the recurring visual mood across
// the brand's evening lounge photography. Pure CSS animation (via
// tailwind keyframes), GPU-cheap, and respects prefers-reduced-motion
// through the global stylesheet.

export default function BokehGlow() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-drift" />
      <div className="absolute right-10 top-1/3 h-56 w-56 rounded-full bg-wine/30 blur-3xl animate-drift2" />
      <div className="absolute left-1/3 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-drift" />
      <div className="absolute right-1/4 bottom-10 h-40 w-40 rounded-full bg-gold/25 blur-2xl animate-drift2" />
      {/* subtle vignette so content stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-transparent to-espresso" />
    </div>
  );
}
