const queryStringToObject = (queryString: string) =>
  queryString
    ? JSON.parse(
        '{"' +
          decodeURI(
            queryString.substring(1).replace(/&/g, '","').replace(/=/g, '":"')
          ) +
          '"}'
      )
    : "";
export default queryStringToObject;
