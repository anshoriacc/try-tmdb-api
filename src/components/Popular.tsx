import { useState } from "react";

import { useGetPopular } from "../store/server/movies";
import { Alert, Segmented } from "antd";
import Card from "./Card";

const Popular: React.FC = () => {
  const [time, setTime] = useState<"day" | "week">("day");

  const { data, isFetching, isError, refetch } = useGetPopular(time);

  return (
    <section className="space-y-2">
      <div className="flex gap-4 items-center">
        <h2 className="text-black">Trending</h2>
        <Segmented
          options={[
            { value: "day", label: "DAY" },
            { value: "week", label: "WEEK" },
          ]}
          onChange={(value) => setTime(value as "day" | "week")}
        />
      </div>
      {isError && (
        <Alert
          type="error"
          message={
            <>
              Error fetching data, refresh or click{" "}
              <a onClick={() => refetch()}>here</a>.
            </>
          }
          showIcon
        />
      )}
      <div className="overflow-x-auto">
        <div className="p-2 flex gap-4">
          {(data || [...Array(20)]).map((movie, index) => (
            <Card key={index} data={movie} isLoading={isFetching || isError} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
