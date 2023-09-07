import PocketBase from "pocketbase";

export const pb = new PocketBase("https://inexpensive-fountain.pockethost.io");

export type User = {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
};

export type Post = {
  id: string;
  author: string;
  cover: string;
  message: string;
  expand: {
    author: User;
  };
  created: Date;
};

export type Advertisement = {
  id: string;
  author: string;
  title: string;
  description: string;
  expand: {
    author: User;
  };
  created: Date;
};

export function createUser(name: string, username: string, email: string, password: string) {
  return pb
    .collection("users")
    .create({
      name,
      username,
      email,
      password,
      passwordConfirm: password,
    })
    .then(
      () => true,
      () => false
    );
}

export function loginUser(email: string, password: string) {
  return pb
    .collection("users")
    .authWithPassword<User>(email, password)
    .then(
      (result) => result.record,
      () => undefined
    );
}

export function getUser(id: string) {
  return pb.collection("users").getOne<User>(id);
}

export function getAuthUser() {
  if (pb.authStore.isValid) {
    return pb.authStore.model as User;
  }
  return undefined;
}

export function getPosts() {
  return pb.collection("posts").getList<Post>(1, 20, {
    sort: "-created",
    expand: "author",
  });
}

export function createPostForm(form: FormData) {
  return pb
    .collection("posts")
    .create<Post>(form, { expand: "author" })
    .then(
      (result) => result,
      () => undefined
    );
}

export function createPost(author: string, message: string) {
  return pb
    .collection("posts")
    .create<Post>(
      {
        author,
        message,
      },
      {
        expand: "author",
      }
    )
    .then(
      (result) => result,
      () => undefined
    );
}

export function deletePost(id: string) {
  return pb.collection("posts").delete(id);
}

export function getAdvertisements() {
  return pb.collection("advertisements").getList<Advertisement>(1, 20, {
    sort: "-created",
    expand: "author",
  });
}

export function createAdvertisement(author: string, title: string, description: string) {
  return pb
    .collection("advertisements")
    .create<Advertisement>(
      {
        author,
        title: title,
        description: description,
      },
      {
        expand: "author",
      }
    )
    .then(
      (result) => result,
      () => undefined
    );
}

export function deleteAdvertisement(id: string) {
  return pb.collection("advertisements").delete(id);
}