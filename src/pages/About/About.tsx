import React from 'react';
import CodeEditor from '../../components/CodeEditor';
import VSCodeHighlight, { Comment, Keyword, String, Property, Function } from '../../components/VSCodeHighlight';

const About: React.FC = () => {
  return (
    <CodeEditor>
      <VSCodeHighlight>
        <div className="space-y-8 text-lg leading-relaxed">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">
              <Property>About</Property> <Keyword>Me</Keyword>
            </h1>
            
            <p>
              <Comment>// Getting to know the person behind the code</Comment>
            </p>
          </header>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Function>Background</Function>
            </h2>
            
            <p>
              My name is <String>Your Name</String>, and I'm a <Property>Full Stack Developer</Property> 
              based in <String>Your City, Country</String>. My journey into programming began during 
              my studies in <String>Computer Science</String>, where I discovered my passion for 
              creating digital solutions that make a real difference.
            </p>
            
            <p>
              I graduated with a <Property>Bachelor's degree in Computer Science</Property> from 
              <String>Your University</String> in <String>2024</String>. During my academic years, 
              I focused on <Keyword>software engineering principles</Keyword>, <Keyword>algorithms</Keyword>, 
              and <Keyword>web development</Keyword>, which laid a solid foundation for my career.
            </p>
          </section>
          
          <section className="space-y-4">  
            <h2 className="text-2xl font-semibold">
              <Function>Professional Experience</Function>
            </h2>
            
            <p>
              Currently, I work as a <Property>Frontend Developer</Property> at <String>Tech Company</String>, 
              where I've been since <String>2023</String>. In this role, I specialize in building 
              <Keyword>responsive web applications</Keyword> using <String>React</String>, 
              <String>TypeScript</String>, and <String>Tailwind CSS</String>.  
            </p>
            
            <p>
              Before my current position, I gained valuable experience as a <Property>Junior Developer</Property> 
              at <String>Startup Inc</String> from <String>2022 to 2023</String>. There, I worked with 
              <String>JavaScript</String>, <String>Node.js</String>, and <String>MongoDB</String>, 
              learning the importance of <Keyword>scalable architecture</Keyword> and 
              <Keyword>clean code practices</Keyword>.
            </p>
            
            <p>
              <Comment>// Every project teaches me something new about problem-solving</Comment>
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Property>Interests & Passions</Property>
            </h2>
            
            <p>
              Beyond coding, I'm passionate about <String>UI/UX design</String> and believe that 
              great software should be both <Keyword>functional</Keyword> and <Keyword>beautiful</Keyword>. 
              I actively contribute to <String>open source projects</String> and enjoy mentoring 
              other developers who are just starting their journey.
            </p>
            
            <p>
              I'm also fascinated by <String>machine learning</String> and its applications in 
              web development. In my free time, you'll find me exploring new frameworks, 
              taking <String>photography</String>, or working on personal projects that challenge 
              me to <Function>grow</Function> as a developer.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Function>Let's Connect</Function>
            </h2>
            
            <p>
              I'm always excited to connect with fellow developers, potential collaborators, 
              or anyone interested in technology. Feel free to reach out to me at 
              <String>your.email@example.com</String>, connect with me on 
              <Property>LinkedIn</Property>, or check out my projects on 
              <Property>GitHub</Property>.
            </p>
            
            <p>
              <Comment>// Ready to collaborate on your next project!</Comment>
            </p>
          </section>
        </div>
      </VSCodeHighlight>
    </CodeEditor>
  );
};

export default About; 