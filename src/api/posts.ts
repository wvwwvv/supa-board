import {supabase} from "../lib/supabase.ts";

export interface Post {
    id:number
    title:string
    content:string
    created_at:string
}

// 모든 목록 가져오기

export const getPosts = async () :Promise<Post[]> => {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', {ascending:false})

    if (error) throw error;

    return data || [];
}


// 포스트 생성

export const createPost = async (
    //content, title 만 새로운 타입으로 받아 newPost 생성 - 서버 타임으로 저장하기 위해
    newPost: Omit<Post, 'id'| 'created_at'>
):Promise<Post> => {
    const {data, error} = await supabase
        .from('posts')
        .insert([newPost]) // 1개 보낼때에도 배열로 보내기
        .select()
        .single() // 저장한 객체는 1개니까 1개만 가져오기

    if (error) throw error;

    return data;
}


// 포스트 한 개 가져오기

export const getPost = async (id: number):Promise<Post> => {
    const {data, error} = await supabase
        .from('posts')
        .select('*')
        .eq('id', id) // where
        .single()

    if (error) throw error;

    return data;
}