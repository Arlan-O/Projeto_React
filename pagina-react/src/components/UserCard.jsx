import './UserCard.css';

function UserCard({ name, email, photoUrl }) {
  return (
    <div className="user-card">
      <img 
        src={photoUrl} 
        alt={name} 
        className="user-avatar"
      />
      
      <div className="user-info">
        <h3 className="user-name">
            {name}
        </h3>
        <p className="user-email">
            {email}
        </p>
      </div>
      
      
      <button className="connect-button">Conectar</button>
    </div>
  );
}

export default UserCard;