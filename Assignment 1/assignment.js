$(document).ready(() => {
  // Statement values
  const $statement_1 = $("#statement-1");
  const $statement_2 = $("#statement-2");
  const $statement_3 = $("#statement-3");
  const $statement_4 = $("#statement-4");
  const $statement_5 = $("#statement-5");
	
	// Setting the saved input values.
	$statement_1.val(sessionStorage.getItem("$statement_1"));
	$statement_2.val(sessionStorage.getItem("$statement_2"));
	$statement_3.val(sessionStorage.getItem("$statement_3"));
	$statement_4.val(sessionStorage.getItem("$statement_4"));
	$statement_5.val(sessionStorage.getItem("$statement_5"));
  
  function onlyAlphanumerical(input) {
    return /^[a-z0-9]*$/i.test(input);
  }
  
  function onlyAlphabetical(input) {
    return /^[a-z]+$/i.test(input);
  }
  
  function onlyNumerical(input) {
    return /^[0-9]+$/i.test(input);
  }
  
  function onlySpecial(input) {
    return /^[!@#\$%\^\&*\)\(+=._-]+$/g.test(input);
  }
  
  function onlyHello(input) {
    return /hello/i.test(input);
  }
  
  $("#submit-1").on("click", () => {
    if (!onlyAlphanumerical($statement_1.val())) {
		  alert("Only alphanumerical characters are allowed.");
    } else {
      alert("Correct statement processed.");
    }
    
    sessionStorage.setItem("$statement_1", $statement_1.val());
	});
	
	$("#submit-2").on("click", () => {
    if (!onlyAlphabetical($statement_2.val())) {
		  alert("Only alphabetical characters are allowed.");
    } else {
      alert("Correct statement processed.");
    }
    
    sessionStorage.setItem("$statement_2", $statement_2.val());
	});
	
	$("#submit-3").on("click", () => {
    if (!onlyNumerical($statement_3.val())) {
		  alert("Only numerical characters are allowed.");
    } else {
      alert("Correct statement processed.");
    }
    
    sessionStorage.setItem("$statement_3", $statement_3.val());
	});
	
	$("#submit-4").on("click", () => {
    if (!onlySpecial($statement_4.val())) {
		  alert("Only special characters are allowed.");
    } else {
      alert("Correct statement processed.");
    }
    
    sessionStorage.setItem("$statement_4", $statement_4.val());
	});
	
	$("#submit-5").on("click", () => {
    if (!onlyHello($statement_5.val())) {
		  alert("Only statements with \"Hello\" are allowed.");
    } else {
      alert("Correct statement processed.");
    }
    
    sessionStorage.setItem("$statement_5", $statement_5.val());
	});
});