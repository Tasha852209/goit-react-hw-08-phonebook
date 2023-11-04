import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import Layout from './Layout/Layout';

const appRoutes = [
  { path: '/', element: <HomePage /> },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
  },
];
const App = () => {
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
