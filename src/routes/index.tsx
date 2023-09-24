import { DefaultLayout } from 'layout/DefaultLayout';
import { Character } from 'pages/Character';
import { Main } from 'pages/Main';
import { ReactElement, ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function Router() {
  const routes: Array<{
    path: string;
    component: () => ReactElement;
    layout?: (props: { children: ReactNode | undefined }) => ReactElement;
  }> = [
    {
      path: '/',
      component: Main,
      layout: DefaultLayout,
    },
    { path: '/character/:id', component: Character, layout: DefaultLayout },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.layout ? (
                <route.layout>
                  <route.component />
                </route.layout>
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
