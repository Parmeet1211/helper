import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 ">
                <Link to='/' className="navbar-brand " >Helper</Link>
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                            <Link to='/signin' className="nav-link" >SignIn</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}