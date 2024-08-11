import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./rootes/root";
import { RegistrationRoot } from './rootes/registrationRoot';
import { LoginRoot } from './rootes/logintRoot';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ProfileRoot } from './rootes/profileRoot';
import { ProfileEditRoot } from './rootes/profileEditRoot';
import { SettingsRoot } from './rootes/settingsRoot';
// Связь с сервером REST API: @tanstack/react-query axios;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});
// Маршрутизация: React-router-dom
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/profile",
        element: <ProfileRoot />
      },
      {
        path: "/profileEdit",
        element: <ProfileEditRoot />
      },
      {
        path: "/settings",
        element: <SettingsRoot />
      }
    ]
  },
  {
    path: "/registration",
    element: <RegistrationRoot />,
  },
  {
    path: "/login",
    element: <LoginRoot />,
  },
  {
    path: "*",
    element: <Root />,
  }
])
//
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
//
//Используемые в front-end части проекта seedOs инструменты:
//
// Используется: yarn, vite, React+TypeScript
// Этикет: --dev eslint prettier prettier-eslint gts
// module.exports = {
//  extends: ["./node_modules/gts"],
//};
// ;
// Маршрутизация: React-router-dom;
// Библиотеки для валидации, регистрации и прочих форм: react-hook-form, @hookform/resolvers , zod;
// Связь с сервером REST API: @tanstack/react-query axios;
// Менеджер состояний: zustand;