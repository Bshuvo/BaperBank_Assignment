let ab = parseInt((document.getElementById("avbalance").value = 1000));

document.getElementById("dbtn").addEventListener("click", () => {
  let dam = parseInt(document.getElementById("dbalance").value);

  if (dam > 0) {
    ab += dam;

    document.getElementById("avbalance").value = ab;
  } else {
    alert("Please Enter Valid amount !");
  }

  document.getElementById("dbalance").value = "";
});

document.getElementById("wbtn").addEventListener("click", () => {
  let xy = parseInt(document.getElementById("avbalance").value);

  let wb = parseInt(document.getElementById("wbalance").value);

  if (wb < xy) {
    xy -= wb;
    document.getElementById("avbalance").value = xy;
  } else if (isNaN(wb)) {
    alert("Please Enter Valid amount !");
  } else {
    alert("Insufficient balance please Deposit first !!");
  }

  console.log(wb);

  document.getElementById("wbalance").value = "";
});
