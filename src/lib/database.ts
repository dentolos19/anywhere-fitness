import PocketBase from "pocketbase";

export const pb = new PocketBase("https://inexpensive-fountain.pockethost.io");

export type User = {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export type Post = {
  id: string;
  owner: User;
  cover: string;
  message: string;
}

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

export function getPosts() {
  return pb.collection("posts").getList<Post>(1, 20, {
    sort: "-created",
    expand: "owner"
  })
}

export function getFileUrl(collectionName: string, recordId: string, fileName: string, token?: string) {
  const url = `${pb.baseUrl}/files/${collectionName}}/${recordId}/${fileName}`;
  if (token)
    return `${url}?token=${token}`;
  return url;
}