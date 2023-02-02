/* eslint-disable */
let apiDomainUrl = "https://api-aws.epay.vn/public";
let endpointUrl = "/v1/saveInfo/customer";
$(document).ready(function () {
  $("#receive-noti").click(function () {
    console.log("hello");
    let emailInput = $("input[name=email-receive]");
    let email = emailInput.val();
    if (validateEmail(email)) {
      $.ajax({
        url: apiDomainUrl + endpointUrl,
        method: "POST",
        data: JSON.stringify({ email: email }),
        contentType: "application/json",
        dataType: "json",
        success: function (result) {
          if (result.responseCode === 200) {
            $("#myModal-receive-email-success").modal("show");
            emailInput.val("");
            return;
          }
          $("#myModal-receive-email-fail").modal("show");
        },
        error: function () {
          $("#myModal-receive-email-fail").modal("show");
        },
      });
    }
  });
});
function validateEmail(mail)
{
  if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(mail))
  {
    return true
  }
  $("#email-fail").modal("show");
  return false
}
