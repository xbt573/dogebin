import type { Component } from 'solid-js';

import { lazy, Suspense } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const Home = lazy(() => import('./pages/Home'));
const Paste = lazy(() => import('./pages/Paste'));

const App: Component = () => {
    return (
        <Routes>
            <Route path="/" component={Home} />
            <Route path="/:id" component={Paste} />
        </Routes>
    );
};

export default App;
