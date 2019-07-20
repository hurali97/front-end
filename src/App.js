import React,{ Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Names from './Names'
import './App.css';


const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql'
})

class App extends Component {
  
  render(){
    return (
      <ApolloProvider client={client}>
        <div className="App">
         <Names/>
        </div>
      </ApolloProvider>
    );
  }
  
}

export default App;