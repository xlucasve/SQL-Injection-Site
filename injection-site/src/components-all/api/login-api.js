const login = async (email) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    mode: "cors",
  };

  let response = await fetch(
    "http://localhost:8090/api/prueba",
    requestOptions
  );
  if (response.status === 200) {
    let jsonData = await response.json();
    return jsonData;
  } else {
    console.log(response.message);
  }
  return JSON.stringify(response);
};

export default login;
