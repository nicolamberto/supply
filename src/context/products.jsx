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
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);

    // Set category and persist to localStorage
    const setCategoryAndPersist = (value) => {
        localStorage.setItem("selectedCategory", value);
        setCategory(value);
    };

    // Load category from localStorage on mount
    useEffect(() => {
        const storedCategory = localStorage.getItem("selectedCategory");
        if (storedCategory) {
            setCategory(storedCategory);
        }
    }, []);

    // Fetch categories once
    useEffect(() => {
        getProductCategories().then((data) => {
            setCategories(data);
        });
    }, []);

    // Fetch products when category changes
    useEffect(() => {
        getProducts({ categoryId: category }).then(setProducts);
    }, [category]);

    const addToCart = (product) => {
        const prodInCartIndex = cart.findIndex(i => i.nombre === product.nombre);
        if (prodInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[prodInCartIndex].quantity += 1;
            return setCart(newCart);
        }
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]));
    };

    const removeFromCart = (product) => {
        const prodInCartIndex = cart.findIndex(i => i.nombre === product.nombre);
        if (product.quantity === 1) {
            return setCart(prevState => prevState.filter(i => i.nombre !== product.nombre));
        }
        const newCart = structuredClone(cart);
        newCart[prodInCartIndex].quantity -= 1;
        return setCart(newCart);
    };

    const clearCart = () => setCart([]);

    const openCartModal = () => {
        setIsCartModalOpen(!isCartModalOpen);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
    };

    return (
        <ProductContext.Provider
            value={{
                category,
                setCategory: setCategoryAndPersist,
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
