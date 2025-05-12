// /src/context/ProductContext.jsx
import { createContext, useState, useEffect, useContext } from "react";
import { getProducts } from "../utils/get-products";
import { getProductCategories } from "../utils/get-product-categories";

const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)

    // Fetch products when category changes
    
    useEffect(() => {
        getProductCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    useEffect(() => {
        getProducts({ categoryId: category }).then(setProducts);
    }, [category]);


    // Cart logic
    /*     const addToCart = (product) => {
            setCart((prev) => [...prev, product]);
        }; */

    const addToCart = (product) => {
        const prodInCartIndex = cart.findIndex(i => i.name === product.name)
        if (prodInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[prodInCartIndex].quantity += 1
            return setCart(newCart)
        }
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    /*     const removeFromCart = (slug) => {
            setCart((prev) => prev.filter((item) => item.slug !== slug));
        }; */

    const removeFromCart = (product) => {
        const prodInCartIndex = cart.findIndex(i => i.name === product.name)
        if (product.quantity === 1) {
            return setCart(prevState => prevState.filter(i => i.name !== product.name))
        }
        const newCart = structuredClone(cart)
        newCart[prodInCartIndex].quantity -= 1
        return setCart(newCart)
    }

    const clearCart = () => setCart([]);

    const openCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen)
    }

    const closeCartModal = () => {
        setIsCartModalOpen(false)
    }

    return (
        <ProductContext.Provider
            value={{
                category,
                setCategory,
                categories,
                setCategories,
                products,
                cart,
                addToCart,
                removeFromCart,
                clearCart,
                openCartModal,
                closeCartModal
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}

export function useProductContext() {
    return useContext(ProductContext);
}
