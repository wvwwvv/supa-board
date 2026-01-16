import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createPost} from "../api/posts.ts";

export default function PostCreatePage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['posts']})
            navigate('/')
        }
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        mutation.mutate({title, content}) // 이 객체가 mutation의 mutationFn에 전달
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
                required
            />

            <input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="내용"
                required
            />

            <button disabled={mutation.isPending}>작업중</button> {/* 작업중일 때 disabled */}
        </form>
    );
}