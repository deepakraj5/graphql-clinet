import { useQuery, gql } from '@apollo/client'
import './App.css';

const App = () => {

  const LIST_USERS_QUERY = gql`
        {
          userlist {
          username
          email
          }
        }
  `


  const {loading, data} = useQuery(LIST_USERS_QUERY)

  console.log(data)



  return (
    <div>

    </div>
  );
}

export default App;
