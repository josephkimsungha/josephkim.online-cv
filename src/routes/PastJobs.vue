<template lang="html">
  <div class="ui container" id="past-jobs">
    <div class="ui very padded piled segment">
      <div class="ui divided items">
        <div class="item">
          <div class="content">
            <div class="header">
              Software Developer at Jarvis Home Services
            </div>
            <div class="meta">
              June 2018 - Present
            </div>
            <div class="description">
              Working as a developer for a start-up company taught me how to learn quickly on the job and to focus on
              more than just my own projects but to maintain consideration of the benefit of the company as a whole. I
              began working on a full-time basis since November 2018.
            </div>
            <br>
            <div class="header">
              Skills used/accrued
            </div>
            <div class="ui equal width grid">
              <div class="column">
                <div class="ui sub header">
                  Front End
                </div>
                <div class="ui bulleted list">
                  <div class="item">React/Redux</div>
                  <div class="item">Styling in Semantic UI</div>
                  <div class="item">GraphQL</div>
                  <div class="item">Bindings for various backend technologies (Feathers JS, Prisma)</div>
                </div>
              </div>

              <div class="column">
                <div class="ui sub header">
                  Back End
                </div>
                <div class="ui bulleted list">
                  <div class="item">Express</div>
                  <div class="item">Feathers JS</div>
                  <div class="item">Prisma</div>
                  <div class="item">Zendesk/Google Sheet APIs</div>
                </div>
              </div>

              <div class="column">
                <div class="ui sub header">
                  Other
                </div>
                <div class="ui bulleted list">
                  <div class="item">Docker</div>
                  <div class="item">Gitlab CI/CD</div>
                  <div class="item">Rancher Deployment</div>
                  <div class="item">Salesforce</div>
                  <div class="item">Zapier App</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="header">
              Software Developer at Telstra
            </div>
            <div class="meta">
              July - December 2017
            </div>
            <div class="description">
              Working in an Agile team of software developers at Telstra
              provided opportunity to grow in full-stack development.
            </div>
            <br>
            <div class="ui equal width grid">
              <div class="column">
                <div class="ui sub header">
                  Major project 1
                </div>
                <div class="ui bulleted list">
                  <div class="item">Mainly front-end development</div>
                  <div class="item">Styling in Bootstrap and LESS</div>
                  <div class="item">SPA navigation using React Router</div>
                </div>
              </div>
              <div class="column">
                <div class="ui sub header">
                  Major project 2
                </div>
                <div class="ui bulleted list">
                  <div class="item">Mainly back-end development</div>
                  <div class="item">Creation of API server in Express</div>
                  <div class="item">Communication with 3rd party XPath APIs</div>
                  <div class="item">State management using Redux</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="header">
              Classroom tutor at Edu Kingdom College
            </div>
            <div class="meta">
              January 2015 - Present
            </div>
            <div class="description">
              While working as a tutor I have learnt to balance keeping the
              classroom a fun and exciting environment and remaining firm to
              ensure all students have the same opportunity to learn unimpeded.
            </div>
          </div>
        </div>

        <div class="item">
          <div class="content">
            <div class="header">
              Work experience at the Australian Institute of Family Studies
            </div>
            <div class="meta">
              June 2012
            </div>
            <div class="description">
              After spending a week at a government department, I gained
              valuable insight into the inner workings of a large hierarchical
              organisation and had the opportunity to develop skills in
              administrative tasks.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PastJobs"
}
</script>

<style lang="css">
#past-jobs .items > .item > .content > .header {
  font-family: "Assistant", Helvetica, Arial, sans-serif;
}
</style>
