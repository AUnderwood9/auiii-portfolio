import React from 'react';
import CodeEditor from '../../components/CodeEditor';
import VSCodeHighlight, { Comment, Keyword, String, Property, Function } from '../../components/VSCodeHighlight';

const Home: React.FC = () => {
  return (
    <CodeEditor>
      <VSCodeHighlight>
        <div className="space-y-8 text-lg leading-relaxed">
          <header className="space-y-6">
            <h1 className="text-4xl font-bold">
              <Keyword>Welcome</Keyword> to My <Property>Portfolio</Property>
            </h1>
            
            <p>
              <Comment>// I'm a passionate developer who loves creating amazing web experiences</Comment>
            </p>
            
            <p>
              Hi there! I'm a <String>full-stack developer</String> with a passion for building 
              <Property> modern web applications</Property>. I specialize in <Function>React</Function>, 
              <Function>TypeScript</Function>, and <Function>Node.js</Function>, but I'm always 
              excited to <Keyword>learn</Keyword> new technologies and tackle challenging problems.
            </p>
          </header>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Property>Skills & Technologies</Property>
            </h2>
            
            <p>
              My technical toolkit includes <String>React & TypeScript</String> for building 
              dynamic user interfaces, <String>Node.js & Express</String> for robust backend 
              services, and <String>Python & Django</String> for rapid development. I also 
              have experience with <String>database design</String>, <String>cloud architecture</String>, 
              and <String>UI/UX design principles</String>.
            </p>
            
            <p>
              <Comment>// I believe in writing clean, maintainable code that scales</Comment>
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Function>Recent Projects</Function>
            </h2>
            
            <p>
              I recently built a <Property>VS Code themed portfolio</Property> using React and 
              TypeScript, showcasing my ability to create unique user experiences. I've also 
              developed a <Property>full-stack e-commerce platform</Property> with payment 
              integration and a <Property>collaborative task management app</Property> with 
              real-time updates.
            </p>
            
            <p>
              Each project taught me something new about <Keyword>problem-solving</Keyword>, 
              <Keyword>architecture design</Keyword>, and <Keyword>user experience</Keyword>. 
              I'm always looking for opportunities to <Function>grow</Function> and 
              <Function>contribute</Function> to meaningful projects.
            </p>
          </section>
          
          <section className="space-y-4">
            <p>
              <Comment>// Let's connect and build something amazing together!</Comment>
            </p>
            
            <p>
              I'm currently open to new opportunities and collaborations. Whether you're 
              looking for a <String>frontend specialist</String>, a <String>full-stack developer</String>, 
              or just want to chat about technology, I'd love to <Keyword>connect</Keyword> with you.
            </p>
          </section>
        </div>
      </VSCodeHighlight>
    </CodeEditor>
  );
};

export default Home; 