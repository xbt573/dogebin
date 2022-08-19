import type { Component } from 'solid-js';
import { Link } from "@solidjs/router";

const Bar: Component = () => {
    return (
        <div class="px-5 py-3 bg-blue-700">
            <Link href="/" class="text-white">DogeBin</Link>
        </div>
    );
};

export default Bar;
