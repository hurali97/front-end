import { gql } from 'apollo-boost'

export const GET_NAMES = gql`
 query {
     getnames{
         name
     }
 }
 `