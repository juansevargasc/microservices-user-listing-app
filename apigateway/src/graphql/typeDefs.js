import { gql } from "apollo-server";


const typeDefs = gql`
    type Listing {
        description: String!
        id: ID!
        title: String!
    }

    # Not null array of non-null listing.
    type Query {
        listings: [Listing!]!
    }
`;

export default typeDefs;