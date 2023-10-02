
const posts = [
  { name: "post 1", author: "Anıl Atasoy", content: "Content 1" },
  { name: "post 2", author: "Yazar 2", content: "Content 2" },
  { name: "post 3", author: "Yazar 3", content: "Content 3" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost, callback) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
    resolve(posts);
    // reject("BİR HATA OLUŞTU");
  });

  return promise1;
};


async function showPosts() {
  try {
    await addPost({ name: "Node", author: "Berat Kunt", content: "Node is Good" });
    listPosts();
  } catch (err) {
    console.log(err);
  }
}
showPosts();
