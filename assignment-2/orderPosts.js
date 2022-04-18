const posts = [
  { author: "Buse", title: "Post1" },
  { author: "Emre", title: "Post2" },
  { author: "Doruk", title: "Post3" },
];

function orderPosts() {
  return new Promise((resolve, reject) => {
    console.log("Postlar sıralanıyor..");
    posts.map((post) => {
      console.log(post.title);
    })
    resolve("Postlar sıralandı");
    reject("Postlar sıralanamadı. Bir hata oluştu.");
  })
}

function addPost(newPost) {
  return new Promise((resolve, reject) => {
    console.log("Yeni bir post ekleniyor..");
    posts.push(newPost);
    resolve("Listeye yeni bir post eklendi.");
    reject("Listeye yeni bir post eklenemedi. Bir hata oluştu.");
  });
}

async function process() {
  try {
    let addedPost = await addPost({ author: "Ali", title: "Post5" });
    console.log(addedPost);
    let orderedPost = await orderPosts();
    console.log(orderedPost);
  } catch (error) {
    console.log(error);
  }
}

process();