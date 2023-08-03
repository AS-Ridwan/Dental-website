import { useEffect } from "react";
export const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - DentalCare`;
  }, [title]);

  return null;
};
export default useDocumentTitle;
