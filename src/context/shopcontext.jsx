import { createContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const ShopContext = createContext();


const ShopContextProvider = (props) => {
    const currency='$';
    const delivery_fee = 10;
    const[search,setSearch] = useState('');
    const[showSearch,setShowSearch] = useState(false);
    const[cartItems,setCartItems] = useState({})
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get("http://localhost:5000/products");
            setProducts(response.data);
          } catch (err) {
            console.error("Error fetching products:", err);
          }
        };
        fetchProducts();
      }, []);
    
    const addToCart = async(itemId) => {
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]) {
            cartData[itemId]+=1;
        }
        else{
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }
    useEffect(()=>{
    },[cartItems])
    const getCartCount = () => {
        let totalCount = 0;
        for (const key in cartItems) {
            if (cartItems[key] > 0) {
                totalCount += cartItems[key];
            }
        }
        return totalCount;
    };
    const updateQuantity = async (itemId,quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData)
    }
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
          const product = products.find((product) => Number(product.id) === Number(itemId));
          if (product) {
            const quantity = cartItems[itemId];
            if (quantity > 0) {
              totalAmount += product.price * quantity;
            }
          }
        }
        return totalAmount;
      };
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, navigate
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;