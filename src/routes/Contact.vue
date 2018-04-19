<template lang="html">
  <div class="ui container" id="contact">
    <div class="ui very padded piled segment">
      <h1 class="ui header">I'd love to hear from you.</h1>

      <form class="ui equal width form">
        <div class="fields">
          <div class="required field">
            <label>Name</label>
            <input type="text" name="name" placeholder="eg. John Smith">
          </div>
          <div class="required field">
            <label>Email Address</label>
            <input type="text" name="email" placeholder="eg. john.smith@email.com">
          </div>
        </div>
        <div class="required field">
          <label>Message</label>
          <textarea name="message" rows="2"></textarea>
        </div>
        <div class="ui right floated submit button">Submit</div>
      </form>

      <h3 class="ui header confirmation">Thank you, your email has been successfully received.</h3>
      <h3 class="ui header failure">Sorry, something went wrong. Please send through an email to <a href="mailto:me@josephkim.online?subject=Error%20in%20contact%20form">me@josephkim.online</a></h3>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "Contact",
  mounted: function() {
    $("#contact .confirmation").hide()
    $("#contact .failure").hide()

    $("#contact .ui.form").form({
      inline: true,
      onSuccess: this.onFormSuccess,
      fields: {
        name: {
          identifier: "name",
          rules: [
            {
              type: "empty",
              prompt: "Please enter your name"
            }
          ]
        },
        email: {
          identifier: "email",
          rules: [
            {
              type: "empty",
              prompt: "Please enter your email address"
            },
            {
              type: "email",
              prompt: "Please enter a valid email address"
            }
          ]
        },
        message: {
          identifier: "message",
          rules: [
            {
              type: "empty",
              prompt: "Please enter a message"
            }
          ]
        }
      }
    })
  },
  methods: {
    onFormSuccess: function(event, fields) {
      event.preventDefault()

      $("#contact .ui.form .field").addClass("disabled")
      $("#contact .ui.form .submit.button").addClass("loading")

      const { name, email, message } = fields

      axios.post("https://us-central1-josephkim-online.cloudfunctions.net/sendEmail", {
        name,
        email,
        message
      }).then((response) => {
        $("#contact .ui.form .field").removeClass("disabled")
        $("#contact .ui.form .submit.button").removeClass("loading")

        $("#contact .ui.form").hide()
        if (response.data === "Success") {
          $("#contact .confirmation").show()
        } else {
          $("#contact .failure").show()
        }
      });
    }
  }
}
</script>

<style lang="css">
</style>
