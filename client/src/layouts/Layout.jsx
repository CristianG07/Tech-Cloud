import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Suspense, useEffect } from 'react';
import { Loader } from '@/components/loader/Loader';
import { Error } from '@/components/error/Error';
import { STATUS } from '@/utils/status';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '@/redux/products/productSlice';

export const Layout = () => {
  const dispatch = useDispatch();
  const { status: productStatus } = useSelector((state) => state.product);
  const { status: categoryStatus } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = productStatus === STATUS.LOADING || categoryStatus === STATUS.LOADING;
  const isError = productStatus === STATUS.ERROR || categoryStatus === STATUS.ERROR;

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      {isError && <Error />}
      {!isLoading && !isError && (
        <Suspense fallback={<Loader />}>
          <Outlet />
          <Footer />
        </Suspense>
      )}
    </>
  );
};
