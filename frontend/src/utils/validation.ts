export const hasNameError = (name: string) => {
    return (name.length < 2);
  };
  
  export const hasEmailError = (email: string) => {
    return !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
  };
  
  export const hasPasswordError = (password: string) => {
    return (password.length < 6);
  };
  export const hasPersonalError = (name: string) => {
    return (name.length < 5);
  };