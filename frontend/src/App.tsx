import type { Component } from 'solid-js';

import { lazy, Suspense } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const Home = lazy(() => import('./pages/Home'));
const Raw = lazy(() => import('./pages/Raw'));
const Paste = lazy(() => import('./pages/Paste'));

const App: Component = () => {
    return (
        <Routes>
            <Route path="/" component={Home} />
            <Route path="/:id" component={Paste} />
            <Route path="/raw/:id" component={Raw} />
        </Routes>
    );
};

export default App;
