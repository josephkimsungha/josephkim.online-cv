<template lang="html">
  <div class="ui container" id="projects">
    <div class="ui very padded piled segment">
      <div class="ui divided items">
        <div class="item">
          <div class="content">
            <a
              class="header"
              href="https://student-study-space.firebaseapp.com/"
              target="_blank"
            >
              Student Study Spaces
            </a>
            <div class="meta">
              React, Redux, Firebase (Hosting, Database, Functions), Semantic UI
            </div>
            <div class="description">
              <p>
                This project was my team's final submission for Facebook
                Melbourne Hack 2018. We worked in a team of 4 to produce an
                application for students to be able to find others in their
                class and collaborate in real time on study notes, and through
                chat and shared quizzes.
              </p>
              <p>
                This application placed in 3<sup>rd</sup>, and a working demo
                can be
                found <a
                  href="https://student-study-space.firebaseapp.com/"
                  target="_blank"
                >
                  here
                </a> and the GitHub page can be found <a
                  href="https://github.com/sudhirmandarapu/student-study-space"
                  target="_blank"
                >
                  here
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <a class="header" href="http://ango.org.au/" target="_blank">
              Australian New Goldberg Orchestra Main Website
            </a>
            <div class="meta">
              Replicated individually in both React and Vue, Firebase (Database, Functions), Semantic UI
            </div>
            <div class="description">
              <p>
                The ANGO website provides a gateway for members of the orchesta
                to find relevant information relating to upcoming concerts and
                rehearsals. There is a login for members to access rehearsal
                parts and the rehearsal schedule, and logging in with admin
                credentials allows the user to reset passwords, edit concert
                details and create rehearsals. I was also involved in creating
                some of the designs through Adobe Illustrator.
              </p>
              <p>
                The current version of the website can be
                found <a href="http://ango.org.au/" target="_blank">
                  here
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <router-link to="/" class="header">
              This website
            </router-link>
            <div class="meta">
              Vue, Firebase (Functions), Semantic UI
            </div>
            <div class="description">
              <p>
                This website is intended to simultaneously provide relevant
                information about my experience and display my ability to
                develop front-end applications. I created this within a week of
                looking into Vue for the first time.
              </p>
              <p>
                The GitHub page for this website can be
                found <a
                  href="https://github.com/josephkimsungha/josephkim.online-cv"
                  target="_blank"
                >
                  here
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style lang="css">
#projects .items > .item > .content > .header {
  font-family: "Assistant", Helvetica, Arial, sans-serif;
}
</style>
