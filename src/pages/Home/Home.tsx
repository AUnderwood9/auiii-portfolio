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
              <Function>TypeScript</Function>, and <Function>Python</Function>, but I'm always 
              excited to <Keyword>learn and experiment with</Keyword> new technologies and tackle challenging problems.
            </p>
          </header>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Property>Skills & Technologies</Property>
            </h2>
            
            <p>
              My technical toolkit includes <String>React & TypeScript</String> for building 
              dynamic user interfaces, <String>Python & AWS Lambdas</String> for robust backend 
              services, and <String>AWS AppSync</String> for GraphQL APIs. I also 
              have a little bit of experience with <String>database design</String>, <String>cloud architecture</String>, 
              and a strong understanding of <String>UI/UX design principles</String>. 
              I'm also becoming a big fan of <String>AI tools</String>!
            </p>
            
            <p>
              <Comment>// I believe in writing clean, maintainable code that gets the job done!</Comment>
            </p>
          </section>
          
          <section className="space-y-4">
            <p>
              I'm currently open to new and engaging opportunities. Whether you're 
              looking for a <String>frontend specialist</String>, a <String>full-stack developer</String>, 
              or just want to chat about technology, I'd love to <Keyword>connect</Keyword> with you!
            </p>
          </section>
        </div>
      </VSCodeHighlight>
    </CodeEditor>
  );
};

export default Home; 