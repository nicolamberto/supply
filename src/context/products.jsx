import { createContext, useState, useEffect, useContext } from "react";
import { getProducts } from "../utils/get-products";
import { getProductCategories } from "../utils/get-product-categories";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    // Inicializar categorías y cart desde localStorage si existen
    const [categories, setCategories] = useState(() => {
        const stored = localStorage.getItem("categories");
        return stored ? JSON.parse(stored) : [];
    });
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });
    const [category, setCategory] = useState("");
    const [products, setProducts] = useState([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [pagination, setPagination] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;

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

    // Guardar categorías en localStorage cuando cambian
    useEffect(() => {
        if (categories.length > 0) {
            localStorage.setItem("categories", JSON.stringify(categories));
        }
    }, [categories]);

    // Guardar cart en localStorage cuando cambia
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    //pagination and fetch products function
    useEffect(() => {
        getProducts({ categoryId: category, page: currentPage, pageSize }).then(res => {
            setProducts(res.data || []);
            setPagination(res.pagination || null);
        });
    }, [category, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    // Fetch categories solo si no hay en localStorage
    useEffect(() => {
        if (categories.length === 0) {
            getProductCategories().then((data) => {
                setCategories(data);
            });
        }
    }, []);

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

    const removeFullProductFromCart = (product) => {
        setCart(prevState => prevState.filter(i => i.nombre !== product.nombre));
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
                pagination,
                currentPage,
                setCurrentPage,
                pageSize,
                cart,
                addToCart,
                removeFromCart,
                removeFullProductFromCart,
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