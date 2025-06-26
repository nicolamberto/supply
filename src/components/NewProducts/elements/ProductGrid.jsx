import { useEffect, useState } from 'react';
import { useProductContext } from '../../../context/products';
import OverlappingTitle from '../../../resources/overlappingTitle';
import Swal from 'sweetalert2';
import SkeletonCard from './skeleton/SkeletonCard';
import Pagination from '../../Pagination/Pagination';
import ProductCard from './product-card/ProductCard';
import ModalVariantes from './product-card/ModalVariantes';
import { splitCategoryTitle } from '../utils/utils';
import { useParams } from 'react-router-dom';

export default function ProductGrid() {
    const { slug } = useParams();
    const { products, categories, category, setCategory, addToCart, currentPage } = useProductContext();
    const [loading, setLoading] = useState(true);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        setCategory(slug || '');
    }, [slug]);

    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timeout);
    }, [category, currentPage]);

    const categoryTitle = category === ''
        ? 'TODOS LOS PRODUCTOS'
        : categories.find((item) => item.slug === category)?.name || '';

    const { firstTitle, secondTitle } = splitCategoryTitle(categoryTitle);

    const addFunction = (product) => {
        addToCart(product);
        Swal.fire({
            position: "top-end",
            toast: true,
            icon: "success",
            title: `${product.nombre} agregado!`,
            showConfirmButton: false,
            timer: 1500,
            backdrop: false,
            width: 'fit'
        });
    };

    const openVariantModal = (variantImage) => {
        setModalImage(variantImage);
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <>
            <section className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative pt-26 pb-28">
                <div className="absolute col-span-3 w-full">
                    <OverlappingTitle
                        firstTitle={firstTitle}
                        secondTitle={secondTitle}
                        colorFirstTitle="text-[#00491f]"
                        colorSecondTitle="text-[#adc9b8]"
                    />
                </div>

                {loading
                    ? Array.from({ length: products.length || 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                    ))
                    : products.map(product => (
                        <ProductCard product={product} openVariantModal={openVariantModal} addFunction={addFunction} />
                    ))
                }

                <div className="absolute bottom-0 w-full flex justify-center md:justify-start">
                    <Pagination />
                </div>
            </section>

            <ModalVariantes modalImage={modalImage} closeModal={closeModal} />
        </>
    );
}
