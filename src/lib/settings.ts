class Settings {
    // userId
    get userId() {
      const value = localStorage.getItem("userId");
      if (!value) return "";
      return value;
    }
    set userId(value: string) {
      localStorage.setItem("userId", value);
    }
  }

  const settings = new Settings();

  export default settings;