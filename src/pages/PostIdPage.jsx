import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl text-center my-4">
        Вы открыли страницу поста с ID = {params.id}
      </h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-teal-600/30 p-4 rounded-lg">
          <div className="text-xl font-bold mb-2">
            Пост: {post.id}. {post.title}
          </div>
          <div className="mb-4">{post.body}</div>
        </div>
      )}

      <div className="bg-teal-600/20 p-4 rounded-lg mt-4">
        <h2 className="text-xl font-bold mb-2">Комментарии пользователя:</h2>
        <div className="mb-4">
          {isComLoading ? (
            <Loader />
          ) : (
            <div>
              {comments.map((comm) => (
                <div key={comm.id} className="bg-white p-4 mb-4 rounded-lg">
                  <div className="text-lg font-bold mb-2">{comm.email}</div>
                  <div>{comm.body}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostIdPage;
