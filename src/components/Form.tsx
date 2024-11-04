import { InputText } from 'primereact/inputtext'
import React, { useEffect, useState } from 'react'
import { getPosts } from '../api.ts';
import { Dropdown } from 'primereact/dropdown';

type Post = {
    id: number;
    userId: number;
    body: string;
    title: string;
}
function Form() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts().then(res => setPosts(res))
    }, [])

    return (
        <div className="surface-200 p-4 border-round mt-3">
            <h3>
                Build out the logic to handle these form input changes. Save the values in state.
            </h3>
            <div className="m-3">
                <label className="mr-3" htmlFor="email">Email:</label>
                <InputText />
            </div>
            <div className="m-3">
                <label className="mr-3" htmlFor="post">Post:</label>
                <Dropdown options={posts} />
            </div>
        </div>
    )
}

export default Form