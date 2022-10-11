import { Footer } from "./Footer";
import { GridCard } from "./GridCard";

export const Grid = () => {

  // useEffect(() => {
  //   dispatch(fetchGetImages(img));
  // }, [dispatch, img]);

  return (
    <>   
    <div className="grid">
      <div className="grid__container">
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
        <GridCard />
      </div>
    </div>
    <Footer />

    </>
 
  );
};
