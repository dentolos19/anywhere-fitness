class Settings {
    // theme
    get theme() {
      const value = localStorage.getItem("theme");
      if (!value) return "light";
      return value;
    }
    set theme(value: string) {
      localStorage.setItem("theme", value);
    }
  }

  const settings = new Settings();

  export default settings;