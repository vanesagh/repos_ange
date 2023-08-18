import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const getProducts = async () => {
    try {
        const client = new ApolloClient({
            uri: 'https://repoange-api.onrender.com/graphql',
            cache: new InMemoryCache(),
        });

        const { data } = await client.query({
            query: gql`
            query GetProducts {
              allProducts{
                id
                name
                description
                price
                presentation {
                    name
                }
                
              }
            }
            `
        });
        //console.log(data)

        return data;



    } catch (error) {
        console.log(error);
        return [];

    }
};





