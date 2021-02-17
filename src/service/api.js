async function callAPI() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  let expectObject = await fetch(url);
  expectObject = await expectObject.json();
  return expectObject;
}

export default callAPI;
