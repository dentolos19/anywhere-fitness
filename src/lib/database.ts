import PocketBase from "pocketbase";

const pb = new PocketBase("https://inexpensive-fountain.pockethost.io");

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