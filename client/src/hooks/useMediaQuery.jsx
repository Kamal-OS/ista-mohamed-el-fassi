import { useEffect, useState } from "react";

function useMediaQuery(query) {
  // use callback to only calls it once on the first render (aka lazy initialization of state)
  const [matches, setMatches] = useState(() =>
    // test that this component is not SSR
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  );

  // no test for window in useEffect, because useEffect only runs in the browser not SSR
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
