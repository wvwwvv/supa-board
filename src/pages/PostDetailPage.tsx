import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getPost} from "../api/posts.ts";

export default function PostDetailPage() {
    const {id} = useParams(); //여기서 url의 id값 자동으로 매칭
    const {data: post, isLoading} = useQuery({
        queryKey: ['post', id],
        queryFn: () => getPost(Number(id)),
    });

    if (isLoading) return <div>로딩 중...</div>
    if (!post) return <div>게시글을 찾을 수 없습니다.</div>


    return (
        <div>
            {/*왜 data 아니라 post지?*/}
            <h1>{post.title}</h1>
            <p>{new Date(post.created_at).toLocaleDateString()}</p>
            <div>{post.content}</div>
        </div>

    );
}