import type { Component } from 'solid-js';
import Bar from '../../components/Bar.tsx';

async function postPaste() {
    const text = document.getElementById('input').value.replaceAll('\n', '\\n');
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value || undefined;

    if (text.trim() == '') {
        alert('Text should not be empty');
        return;
    }
    if (title.trim() == '') {
        alert('Title should not be empty');
        return;
    }

    const body = JSON.stringify({
        title: title,
        description: desc,
        text: text
    });

    const req = await fetch('/api/paste', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    });

    const url = await req.text();
    location.replace(`/${url}`);
}

const Home: Component = () => {
    return (
        <div class="h-screen flex flex-col">
            <Bar />
            <textarea id="input" class="border-solid border-2 border-gray-400 h-full m-5"></textarea>
            <button onclick={postPaste}>Submit</button>

            <div class="m-5">
                <div>
                    <p>Title</p>
                    <input type="text" id="title" class="border-solid border-2 border-gray-400 w-full" />
                </div>

                <div>
                    <p>Description</p>
                    <input type="text" id="desc" class="border-solid border-2 border-gray-400 w-full" />
                </div>
            </div>
        </div>
    );
};

export default Home;
