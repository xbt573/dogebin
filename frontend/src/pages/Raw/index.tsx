import type { Component } from 'solid-js';
import { createResource, Show } from 'solid-js';
import { useParams } from '@solidjs/router';

const fetchPaste = async (id: string) => await (await fetch(`/api/paste/${id}`)).json();

const Raw: Component = () => {
    const params = useParams();
    const [paste] = createResource(params.id, fetchPaste);

    return (
        <Show when={!paste.loading}>
            <pre>{paste().text.replaceAll('\\n', '\n')}</pre>
        </Show>
    );
};

export default Raw;
