import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const getProducts = async () => {
    try {
        const client = new ApolloClient({
            uri: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
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
                imageUrl
                
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





