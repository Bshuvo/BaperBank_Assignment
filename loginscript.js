document.getElementById("logbtn").addEventListener("click", () => {
  let accnum = document.getElementById("acc").value;
  let accpin = document.getElementById("pin").value;
  if (accnum === "C223035" && accpin === "C223035" || accnum ==="admin" && accpin ==="admin") {
    window.location.href = "profile.html";
  }
  else
  {
    alert("Please enter correct Account Number or Pin !!")
    alert("AccountNumber->admin,pin->admin")
  }

  document.getElementById("acc").value="";
  document.getElementById("pin").value="";

});
