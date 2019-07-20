import React, { Component } from 'react';
import { GET_NAMES } from './queries.js'
import { Query } from 'react-apollo';


class Names extends Component {


    render() {
        return (

            <Query query={GET_NAMES}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Loading...</div>;
                    if (error) return <div>Error :(</div>;

                    return data.getnames.map(({ name }, i) => <h3 key={i} > {name} </h3> )

                }}

            </Query>

        );
    }

}

export default Names;