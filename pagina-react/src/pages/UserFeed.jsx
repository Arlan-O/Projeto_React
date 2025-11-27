import { useState, useEffect } from 'react';
import { getUsers } from '../service/userService';
import UserCard from '../components/UserCard';
import './UserFeed.css'; 

function UserFeed() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const data = await getUsers();
        setUserList(data);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="feed-container">
      <h1 className="feed-title">Sugestões de Conexão</h1>

      {loading ? (
        <div className="loading-container">
             <div className="loading-spinner"></div>
             <p>Buscando perfis...</p>
        </div>
      ) : (
        
        <div className="users-grid">
          {userList.map(user => (
            <UserCard 
              key={user.id}
              name={user.name}
              email={user.email}
              photoUrl={`https://robohash.org/${user.id}?set=set5&size=150x150`} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserFeed;