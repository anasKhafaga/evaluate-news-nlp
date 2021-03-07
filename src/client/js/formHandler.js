function handleSubmit(event, check) {
    event.preventDefault()

    if (!check) {
      let formText = document.getElementById('name').value
      if (typeof formText !== 'string' || !isNaN(parseInt(formText))) {
        return alert('Oops! you must enter string');
      }
    Client.checkForName(formText);
    return fetch('http://localhost:8080/test', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        name: formText
      }),
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(function (res) {
        const uList = document.createElement('ul');
        const sentence_list = res.sentence_list[0];
        for (const key in sentence_list) {
          const lItem = document.createElement('li');
          lItem.textContent = `${key}: ${sentence_list[key]}`;
          uList.appendChild(lItem);
        }
        document.getElementById('results').appendChild(uList);
      });
  } else {
    return 'It works'
  }
}

export { handleSubmit }
