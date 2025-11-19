import nav from '../../public/users.svg'

function Header(){
    return(
       <header style={{width:'100%', height:50, color:'#20262d'}}>
            <img src={nav}/>
       </header>
    );
}

export default Header;