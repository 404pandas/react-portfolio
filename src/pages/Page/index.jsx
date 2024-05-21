import { useEffect } from "react";
import PageContent from "../PageContent";

import { capitalizeFirstLetter } from "../../utils/helpers";
import Nav from "../../components/Nav";
import { Outlet } from "react-router-dom";

function Page({ currentPage }) {
  // Remove leading slash and check if it's empty for the root
  const isRootPage = currentPage === "/";
  const pageName = currentPage.substring(1);

  useEffect(() => {
    // Set the document title using the helper function
    document.title = capitalizeFirstLetter(pageName || "Home");
  }, [pageName]);

  return (
    <>
      {!isRootPage && <Nav />}
      <PageContent>
        <Outlet />
      </PageContent>
    </>
  );
}
export default Page;
