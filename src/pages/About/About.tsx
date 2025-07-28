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
              My name is <String>Andrew</String>, and I'm a <Property>Full Stack Developer </Property>
              based in <String>Birmingham, AL</String>. My journey into programming began during 
              my studies in <String>Computer Science</String>, where I discovered my passion for 
              building software that offer value and solve real world problems. 
              I'm currently working as a <Property>Full Stack Developer</Property> at <String>AutoTec</String>, where I've been since <String>2020</String>.
            </p>
            
            <p>
              I graduated with a <Property>Bachelor's degree in Computer Science</Property> from
              <String> Tuskegee University</String> in <String>2015</String>. During my academic years, 
              I focused on building strong fundamentals in <Keyword>software development</Keyword> and <Keyword>web development</Keyword>, 
              which laid a solid foundation for my career.
            </p>
          </section>
          
          <section className="space-y-4">  
            <h2 className="text-2xl font-semibold">
              <Function>Professional Experience Overview</Function>
            </h2>
            
            <p>
              Currently, I work as a <Property> Developer</Property> at <String>AutoTec</String>, 
              where I've been since <String>2020</String>. In this role, I specialize in building 
              <Keyword> responsive interfaces</Keyword> using <String>React</String>, 
              <String> TypeScript</String>, and <String>Tailwind CSS</String> for our clients in the automotive indu  stry. 
              I also work with <String>Python</String> and <String>AWS Lambdas</String>; 
              while employing other AWS cloud services to build robust applications.
            </p>
            
            <p>
              Before my current position, I gained valuable experience as a <Property>UI and Automation Developer </Property> 
              at <String>BBVA</String> from <String>2018 to 2020</String>. There, I worked with 
              <String> JavaScript</String>, <String> jQuery</String>, and <String>Java</String>, 
              learning the importance of <Keyword>collaboration</Keyword> and 
              <Keyword> clean code </Keyword> practices that are <Keyword>robust</Keyword> and <Keyword>maintainable</Keyword>. 
              I also worked with <String>Spring Webflow</String> and <String>Spring MVC</String> to build and serve up our UI.
            </p>
            
            <p>
              <Comment>// Every project should teach you something new about problem-solving!</Comment>
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Property>Interests & Passions</Property>
            </h2>
            
            <p>
              Beyond coding, I'm passionate about <String>UI/UX design</String> and believe that 
              great software should be <Keyword>functional</Keyword>, <Keyword>eye catching</Keyword>, and <Keyword>user friendly</Keyword>. 
              Outside of software and the learning, I enjoy <String>gaming</String> and Mixed Martial Arts during my free time.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              <Function>Let's Connect</Function>
            </h2>
            
            <p>
                If your interested in connecting, feel free to reach out to me at 
              <Property> <a href="mailto:UnderwoodAndrewIII@gmail.com"> UnderwoodAndrewIII@gmail.com</a></Property>, or connect with me on 
              <Property> <a href="https://www.linkedin.com/in/andrew-underwood-5b796813a/">LinkedIn</a></Property>. You can also view some of
              the work i've done on my free time at my <Property> <a href="https://github.com/AUnderwood9">GitHub</a></Property> page.
            </p>
          </section>
        </div>
      </VSCodeHighlight>
    </CodeEditor>
  );
};

export default About; 