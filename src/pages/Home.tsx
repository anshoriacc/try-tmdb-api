import useUrlState from "@ahooksjs/use-url-state";
import Popular from "../components/Popular";

const HomePage: React.FC = () => {
  const [query, setQuery] = useUrlState(
    {
      modal: false,
      id: null,
    },
    { parseOptions: { parseBooleans: true } }
  );
  return (
    <>
      <Popular />
      <section>
        <img
          src={
            "https://seeklogo.com/images/T/the-spongebob-logo-27F781E89E-seeklogo.com.png"
          }
        />
      </section>
    </>
  );
};

export default HomePage;
