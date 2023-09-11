import PocketBase from "pocketbase";

const database = new PocketBase("https://inexpensive-fountain.pockethost.io");

export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
};

export type Post = {
  id: string;
  author: string;
  message: string;
  cover: string;
  created: Date;
  expand: {
    author: User;
  };
};

export type Advertisement = {
  id: string;
  author: string;
  title: string;
  description: string;
  created: Date;
  expand: {
    author: User;
  };
};

export type Profile = {
  id: string;
  user: string;
  data: any;
  statistics: any;
  settings: any;
};

export function checkAuthUser() {
  return database.authStore.isValid;
}

export function getAuthUser() {
  return database.authStore.model as User;
}

export function logoutAuthUser() {
  database.authStore.clear();
}

export function updateAuthUser(form: FormData) {
  return database.collection("users").update<User>(getAuthUser().id, form, {
    expand: "author",
  });
}

export function loginUser({ username, password }: { username: string; password: string }) {
  return database.collection("users").authWithPassword<User>(username, password);
}

export function registerUser({
  name,
  username,
  email,
  password,
}: {
  name: string;
  username: string;
  email: string;
  password: string;
}) {
  return database.collection("users").create<User>({
    name,
    username,
    email,
    password,
    passwordConfirm: password,
  });
}

export function createPost(data: FormData) {
  data.append("author", getAuthUser().id);
  return database.collection("posts").create<Post>(data, {
    expand: "author",
  });
}

export function deletePost(id: string) {
  return database.collection("posts").delete(id);
}

export function getPosts() {
  return database.collection("posts").getList<Post>(1, 20, {
    sort: "-created",
    expand: "author",
  });
}

export function createAdvertisement(data: FormData) {
  data.append("author", getAuthUser().id);
  return database.collection("advertisements").create<Advertisement>(data, {
    expand: "author",
  });
}

export function deleteAdvertisement(id: string) {
  return database.collection("advertisements").delete(id);
}

export function getAdvertisements() {
  return database.collection("advertisements").getList<Advertisement>(1, 20, {
    sort: "-created",
    expand: "author",
  });
}

export function createProfile(id: string) {
  return database.collection("profiles").create<Profile>({
    user: id,
    data: {},
    statistics: {},
    settings: {},
  });
}

export function getProfile(id: string) {
  return database
    .collection("profiles")
    .getFirstListItem<Profile>(`user.id='${id}'`)
    .then(
      (profile) => profile,
      (error) => {
        if (error.status === 404) {
          return createProfile(id);
        }
        throw error;
      }
    );
}

export function updateProfile(id: string, data: Partial<Omit<Profile, "id" | "user">>) {
  return database.collection("profiles").update<Profile>(id, data);
}

export function getFileUrl(model: { id: string }, fileName: string) {
  return database.files.getUrl(model, fileName);
}