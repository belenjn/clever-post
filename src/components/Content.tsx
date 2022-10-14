import { Footer } from "./Footer";
import { Grid } from "./Grid";
import { Navbar } from "./Navbar";

export const Content = ({
  setAuthenticated,
}: {
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  
  return (
    <>
      <Navbar setAuthenticated={setAuthenticated} />
      <Grid/>
      <Footer />
    </>
  );
};
