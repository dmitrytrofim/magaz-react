import { Container } from './common';
import { useProducts } from '../assets/hooks/useProducts';

function Header() {
 const { loadError } = useProducts();
 return (
  <header>
   <Container>
    <h1 className="text-center py-3 text-[30px] font-700">
     {loadError || 'Mini-STORE'}
    </h1>
   </Container>
  </header>
 );
}

export default Header;
