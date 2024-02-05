import { Wrapper, Container } from './components/common';
import Header from './components/header';
import Footer from './components/footer';
import { Product } from './components/product';
import { useProducts } from './assets/hooks/useProducts';
import Cart from './components/cart';
import PopupOrder from './components/popup';

export function App() {
 const { products, loading } = useProducts();

 return (
  <Wrapper>
   <Header />
   <main>
    <section>
     <Container>
      <div className="relative grid grid-cols-[2fr,_300px] items-start gap-2 pb-10">
       <div className="grid grid-cols-2 gap-2">
        {loading && (
         <p className="text-[40px] text-center col-span-full">Loading...</p>
        )}
        {products &&
         products.map((item: any) => <Product key={item.id} item={item} />)}
       </div>
       <div className="border sticky top-2 py-[10px] overflow-hidden">
        <Cart />
       </div>
      </div>
     </Container>
    </section>
   </main>
   <PopupOrder />
   <Footer />
  </Wrapper>
 );
}
