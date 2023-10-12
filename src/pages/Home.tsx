import useUrlState from "@ahooksjs/use-url-state";
import Popular from "../components/Popular";
import DetailModal from "../components/Detail.modal";
import { useCallback } from "react";

const HomePage: React.FC = () => {
  const [query, setQuery] = useUrlState(
    {
      modal: false,
      id: null,
      type: null,
    },
    { parseOptions: { parseBooleans: true } }
  );

  const toggleModal = useCallback(
    ({ type = undefined, id = undefined }: { type?: string; id?: number }) => {
      setQuery((_prev) => ({ modal: !_prev.modal, type, id }));
    },
    [setQuery]
  );

  return (
    <>
      <Popular />
      <DetailModal isOpenModal={query.modal} toggle={toggleModal} />
    </>
  );
};

export default HomePage;
