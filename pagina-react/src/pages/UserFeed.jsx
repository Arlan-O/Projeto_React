
import { useState, useEffect } from 'react';
import { getUsers } from '../service/userService';
import UserCard from '../components/UserCard';

function UserFeed() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        
        // Busca simples apenas dos usuários
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
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Lista de Usuários</h1>

      {loading ? (
        <p style={{ textAlign: 'center', color: '#fff' }}>Carregando...</p>
      ) : (
        <div>
          {userList.map(user => (
            <UserCard 
              key={user.id}
              name={user.name}
              email={user.email}
              
              // O set4 cria gatinhos, se tirar o set4 vira robôs.
              photoUrl={`https://robohash.org/${user.id}?set=set5&size=150x150`} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserFeed;