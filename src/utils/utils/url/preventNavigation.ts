const preventNavigation = (event: Event) => {
  event.preventDefault();

  // event.returnValue = true;

  return "";
};
export default preventNavigation;
