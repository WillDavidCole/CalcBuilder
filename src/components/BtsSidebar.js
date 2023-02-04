import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../styles/sidebar.css'

// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function BtsSidebar() {
  return (
          <div>
            <ul class="sidebar">
        <li>
          <span>BBB</span>
        </li>
        <li>
          <span>
            <i class="fa fa-home"/>
          </span>
          <span>Home</span>
        </li>
        <li>
          <span>
            <i class="fa fa-dashboard"/>
          </span>
          <span>Dashboard</span>
        </li>
        <li>
          <span>
            <i class="fa fa-users"/>
          </span>
          <span>Users</span>
        </li>
        <li>
          <span>
            <i class="fa fa-shopping-cart"/>
          </span>
          <span>Products</span>
        </li>
        <li>
          <span>
            <i class="fa fa-bookmark"/>
          </span>
          <span>Bookmarks</span>
        </li>
        <li>
          <span>
            <i class="fa fa-gear"/>
          </span>
          <span>Settings</span>
        </li>
      </ul>
       {/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}>
          <div className="sidebar-sticky">
          </div>
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
          </Nav.Item>

        </Nav> */}
    </div>
  );
}

export default BtsSidebar;