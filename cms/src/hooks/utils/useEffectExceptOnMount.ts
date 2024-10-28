import { useEffect, useRef } from 'react'

/**
 * Identical to React.useEffect, except that it never runs on mount. This is
 * the equivalent of the componentDidUpdate lifecycle function.
 *
 * @param effect - A useEffect effect function
 * @param dependencies - useEffect dependency array
 */
export const useEffectExceptOnMount = (
  effect: () => void | (() => void),
  dependencies: React.DependencyList,
): void => {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) {
      const unmount = effect()
      return () => unmount && unmount()
    } else {
      mounted.current = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  // Reset on unmount for the next mount.
  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])
}
