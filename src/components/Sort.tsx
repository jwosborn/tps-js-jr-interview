import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getPosts } from '../api.ts';

type Post = {
    id: number;
    userId: number;
    body: string;
    title: string;
}

function Sort() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts().then(res => setPosts(res))
    }, [])

    return (
        <div className="surface-200 p-4 border-round mt-3">
            <ul>
                <li><h4>Sort the Posts (already in state) to only contain posts by users with even Id's.</h4></li>
                <li><h4>Pass the sorted posts down to the table component below  as a prop as <code>value</code>.</h4></li>
            </ul>
            <DataTable value={[]} showGridlines stripedRows>
                <Column field="title" header="Post Title" />
                <Column field="userId" header="User Id" />
            </DataTable>
        </div>
    )
}

export default Sort