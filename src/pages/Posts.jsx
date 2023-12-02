import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import PostService from "./../API/PostService";
import SubButton from "./../components/UI/button/SubButton";
import MyModal from "./../components/UI/MyModal/MyModal";
import Loader from "./../components/UI/Loader/Loader";
import { getPageCount } from "./../utils/pages";
import PostForm from "./../components/PostForm";
import PostList from "./../components/PostList";
import Pagination from "./../components/UI/pagination/Pagination";
import PostFilter from "./../components/PostFilter";
import MySelect from "../components/UI/select/MySelect";

export default function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, title: "mazda", body: "erwbrwb" },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts(page, limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <SubButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </SubButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Количество элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "показать все" },
        ]}
      />
      {postError && <h1>Ошибка! ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader></Loader>
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title="Наши посты"
        />
      )}
      <Pagination changePage={changePage} page={page} totalPages={totalPages} />
    </div>
  );
}
