import React from 'react'
function Skills() {
  return (
    <div class="our-skills" id="our-skills">
      <h2 class="main-title">OUR SKILLS</h2>
      <div class="container">
        <img src="imagr/skills.png" alt="" />
        <div class="skills">
          <div class="skill">
            <h3>
              HTML <span>80%</span>
            </h3>
            <div class="the-progress">
              <span style={{ width: 0 }} data-width="80%"></span>
            </div>
          </div>
          <div class="skill">
            <h3>
              CSS <span>85%</span>
            </h3>
            <div class="the-progress">
              <span style={{ width: 0 }} data-width="85%"></span>
            </div>
          </div>
          <div class="skill">
            <h3>
              JavaScript <span>70%</span>{" "}
            </h3>
            <div class="the-progress">
              <span style={{ width: 0 }} data-width="70%"></span>
            </div>
          </div>
          <div class="skill">
            <h3>
              Python <span>80%</span>{" "}
            </h3>
            <div class="the-progress">
              <span style={{ width: 0 }} data-width="80%"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills