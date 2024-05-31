import { useState } from "react";
import Episode from "./Episode";
import { useQuery } from "@tanstack/react-query";
import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient("https://api.taddy.org/", {
  headers: {
    "X-USER-ID": "1470",
    "X-API-KEY":
      "0be1a55be382eff63ccc13449b89e1a14c7d9cab341cc9e44524ce433ed547a0ccf609942ecc129d4bc1b9224a123dccb4",
  },
});

const GET_PODCASTSERIES = gql`
  query getPodcastSeries($name: String!) {
    getPodcastSeries(name: $name) {
      uuid
      hash
      name
      description
      episodes {
        uuid
        name
        description
        datePublished
        audioUrl
        duration
      }
    }
  }
`;

export default function Episodes() {
  const {
    data: episodes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["episodes"],
    select: (data) => data.getPodcastSeries.episodes,
    queryFn: async () =>
      await client.request(GET_PODCASTSERIES, { name: "The Daily" }),
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching episodes</div>;

  console.log(episodes);

  return (
    <div className="my-10">
      <h1>Episodes</h1>
      <div className="mt-10">
        {episodes.map((episode, index) => (
          <Episode key={index} episode={episode} />
        ))}
      </div>
    </div>
  );
}
