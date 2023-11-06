import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserThunk } from 'redux/AuthSlice';
import RestictedRoute from './RestictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: (
      <RestictedRoute>
        <RegisterPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <RestictedRoute>
        <LoginPage />
      </RestictedRoute>
    ),
  },
  {
    path: '/contacts',
    element: (
      <PrivateRoute>
        <ContactsPage />
      </PrivateRoute>
    ),
  },
];
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

// const appRoutes = [
//   { path: '/', element: <HomePage /> },
//   {
//     path: '/register',
//     element: (
//       <PublicRoute redirectTo="/contacts" component={<RegisterPage />} />
//     ),
//   },
//   {
//     path: '/login',
//     element: <PublicRoute redirectTo="/contacts" component={<LoginPage />} />,
//   },
//   {
//     path: '/contacts',
//     element: <PrivateRoute redirectTo="/login" component={<ContactsPage />} />,
//   },
// ];
// export default function App() {
//   const { isRefreshing } = useAuth();

//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(refreshUser());
//   }, [dispatch]);

//   return isRefreshing ? (
//     <Loading />
//   ) : (
//     <>
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             {appRoutes.map(({ path, element }) => (
//               <Route key={path} path={path} element={element} />
//             ))}
//           </Route>
//         </Routes>
//       </Suspense>
//       <ToastContainer />
//     </>
//   );
// }
