// src/components/UserCard.jsx

function UserCard({ name, email, photoUrl }) {
  return (
    <div style={{ 
      display: 'flex',     
      alignItems: 'center',
      gap: '15px',
      
      
      background: '#ffffff', 
      border: '1px solid #ddd', 
      borderRadius: '12px', 
      padding: '15px', 
      marginBottom: '15px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
    }}>
      
      
      <img 
        src={photoUrl} 
        alt={name} 
        style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%',
            backgroundColor: '#f0f0f0' 
        }} 
      />
      
      <div style={{ textAlign: 'left' }}>
        
        <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#333' }}>
            {name}
        </h3>
        
        <p style={{ margin: 0, color: '#777', fontSize: '14px' }}>
            {email}
        </p>
      </div>

    </div>
  );
}

export default UserCard;