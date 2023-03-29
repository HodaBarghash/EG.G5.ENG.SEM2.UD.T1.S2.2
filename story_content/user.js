function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QjAvlenv63":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyEQbuV0AJh3ACBlu1p9sxX8qNgTn3iurkoKk23afnzE7hRUTxtMuS7eH9LwHBfS97Q/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

