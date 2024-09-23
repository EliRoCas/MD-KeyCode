import Title from "../atoms/title/Title";
import Description from "../atoms/description/Description";

const Information = () => {
  return (
    <>
      <Title
        title={"Order Summary"}
        margin={"1.5rem"}
        padding={"0.650"}
      />
      <Description
        text={
          "You can now listen to millions of songs, audiobooks, and podcasts on any divice anywhere you like!"
        }
        margin={"1rem"}
        padding={"0.650"}
      />
    </>
  );
};

export default Information;
