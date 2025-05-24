import { useEffect } from "react";

const SITE_TITLE = "ISTA MOHAMED EL FASSI ERRACHIDIA";

function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} - ${SITE_TITLE}`;
  }, [title]);
}

export default usePageTitle;
