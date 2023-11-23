import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Plant from './pages/Plant/Plant';
import Main from './pages/Main/Main';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/main',
        element: <Main />
      },
      {
        path: '/plant',
        element: <Plant />
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
