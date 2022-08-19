import type { Component } from 'solid-js';
import Bar from '../../components/Bar.tsx';
import { useParams } from '@solidjs/router';
import { createResource } from 'solid-js';

const fetchPaste = async (id: string) => await (await fetch(`/api/paste/${id}`)).json();

const Paste: Component = () => {
    const params = useParams();
    const [paste] = createResource(params.id, fetchPaste);

    return (
        <div class="h-screen flex flex-col">
            <Bar />
            <Show when={!paste.loading}>
                <Switch>
                    <Match when={!paste()}>
                        <div class="items-center justify-center">
                            <pre>404 Not Found</pre>
                        </div>
                    </Match>

                    <Match when={paste()}>
                        <div class="m-5">
                            <h1>{paste().title}</h1>
                            <p>{paste().description}</p>
                            <div class="h-full border-solid border-2 border-gray-400">
                                <pre><code>{paste().text.replaceAll('\\n', '\n')}</code></pre>
                            </div>
                        </div>
                    </Match>
                </Switch>
            </Show>
        </div>
    );
};

export default Paste;
