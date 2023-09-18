class Settings {
  // theme
  get theme() {
    const value = localStorage.getItem("theme");
    if (!value) return "dark";
    return value;
  }
  set theme(value: string) {
    localStorage.setItem("theme", value);
  }
  // ai base url
  get aiBaseUrl() {
    const value = localStorage.getItem("ai-base_url");
    if (!value) return "https://cock-za06.onrender.com/v1";
    return value;
  }
  set aiBaseUrl(value: string) {
    localStorage.setItem("ai-base_url", value);
  }
  // ai api key
  get aiApiKey() {
    const value = localStorage.getItem("ai-api_key");
    if (!value) return "";
    return value;
  }
  set aiApiKey(value: string) {
    localStorage.setItem("ai-api_key", value);
  }
  // ai model
  get aiModel() {
    const value = localStorage.getItem("ai-model");
    if (!value) return "gpt-3.5-turbo";
    return value;
  }
  set aiModel(value: string) {
    localStorage.setItem("ai-model", value);
  }
}

const settings = new Settings();

export default settings;