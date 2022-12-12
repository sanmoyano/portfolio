import { ApolloClient, InMemoryCache, gql, HttpLink } from "@apollo/client";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        // uri: "http://localhost:4000/graphql",
        uri: "https://flyby-gateway.herokuapp.com/",
        fetch,
    }),
    headers: {
        "Content-Type": "aplication/json",
    },
});

// client
//     .query({
//         query: gql`
//             query GetLocations {
//                 locations {
//                     id
//                     name
//                     description
//                     photo
//                 }
//             }
//         `,
//     })
//     .then((result) => console.log(result));

// client
//     .query({
//         query: gql`
//             query allProjects {
//                 title
//                 description
//                 image
//             }
//         `,
//     })
//     .then((result) => console.log(result));

export default client;
