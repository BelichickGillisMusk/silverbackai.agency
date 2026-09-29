/**
 * Soft-open face.
 * Default is off, so `/` keeps rendering SilverbackFront.
 *
 * Turn the face on for `/` with either:
 *   - build env VITE_SOFT_OPEN=true
 *   - query ?ff_enable_soft_open=1 (or ?soft=1)
 *   - localStorage silverback_ff.enable_soft_open = true
 *
 * Escape hatch: ?face=live always shows SilverbackFront.
 * `/soft-open` always renders the face so it can be previewed while the flag is off.
 */

type SoftOpenEnv = {
  VITE_SOFT_OPEN?: string;
};

function viteEnv(): SoftOpenEnv {
  return (import.meta as ImportMeta & { env?: SoftOpenEnv }).env ?? {};
}

function storedSoftOpen(): boolean | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    const raw = localStorage.getItem('silverback_ff');
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { enable_soft_open?: unknown };
    if (typeof parsed.enable_soft_open === 'boolean') return parsed.enable_soft_open;
  } catch {
    return null;
  }
  return null;
}

export function isSoftOpenEnabled(search: string): boolean {
  const params = new URLSearchParams(search);
  if (params.get('face') === 'live') return false;

  const flag = params.get('ff_enable_soft_open');
  if (flag === '0' || flag === 'false') return false;
  if (flag === '1' || flag === 'true' || params.get('soft') === '1') return true;

  const stored = storedSoftOpen();
  if (stored !== null) return stored;

  return viteEnv().VITE_SOFT_OPEN === 'true';
}
