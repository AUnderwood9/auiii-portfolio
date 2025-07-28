import React from 'react';
import CodeEditor from '../../components/CodeEditor';
import VSCodeHighlight, { Comment, Keyword, String, Property, Function } from '../../components/VSCodeHighlight';

const Experience: React.FC = () => {
    return (
        <CodeEditor>
            <VSCodeHighlight>
                <div className="space-y-8 text-lg leading-relaxed">
                    <header className="space-y-4">
                        <h1 className="text-4xl font-bold">
                            <Property>Professional Experience</Property>
                        </h1>

                        <p>
                            <Comment>// My journey through various roles and technologies</Comment>
                        </p>
                    </header>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            <Function>Current Position</Function>
                        </h2>

                        <div className="space-y-3">
                            <h3 className="text-xl font-medium">
                                <Property>Full Stack Developer</Property> at <String>AutoTec</String>
                            </h3>
                            <p className="text-sm opacity-75">
                                <Keyword>2020 - Present</Keyword> | <String>Hybrid Birmingham, Al</String>
                            </p>

                            <p>
                                Building user friendly and responsive <Property>front ends</Property> using <Function> React</Function>,
                                <Function> TypeScript</Function>, and a little bit of <Function>Tailwind</Function>.
                                Supporting and creating robust <Property>backend services</Property> using <Keyword>Python</Keyword> and <Function>AWS Lambda</Function>.
                            </p>

                            {/* Technologies use keywords, libraries use functions and metrics use strings */}
                            <ul className="ml-6 space-y-2 list-disc">
                                <li>Developed <Keyword>AWS Lambda functions</Keyword> in <Keyword>Python</Keyword> to automate auction report processing.</li>
                                <li>Built and maintained React front-end applications to enhance UI responsiveness for auctions.</li>
                                <li>Designed RESTful APIs with AWS API Gateway to improve and integrate with legacy applications.</li>
                                <li>Created GraphQL queries and mutations using AWS AppSync to optimize data retrieval efficiency.</li>
                                <li>Integrated DynamoDB as a data source to ensure high availability and scalability for transactions.</li>
                                <li>Utilized AWS S3 for secure storage of reports and billing transactions, improving data accessibility.</li>
                                <li>Queried AWS Athena to extract insights from data lakes, enabling better data-driven decisions.</li>
                                <li>Managed AWS IAM policies and permissions to enforce security best practices and access control.</li>
                                <li>Built reusable component library used across <String>4 projects</String>.</li>
                                <li>Collaborated with UX team to enhance user experience.</li>
                            </ul>

                            <p>
                                <Comment>
                                    // Main Technologies: React, Redux, TypeScript, Python, Tailwind, HTML, CSS, Lambda, S3, Athena, IAM, CloudFront,
                                    AppSync, API Gateway, Bitbucket, DynamoDB, PostgreSQL, Jira
                                </Comment>
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold">
                            <Function>Previous Roles</Function>
                        </h2>

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h3 className="text-xl font-medium">
                                    <Property>UI Developer</Property> at <String>BBVA</String>
                                </h3>
                                <p className="text-sm opacity-75">
                                    <Keyword>2019 - 2020</Keyword> | <String>Biringham, Al</String>
                                </p>
                                <p>
                                    Developed and maintained <Property>Front End applications</Property> serving millions of users. Collaborated extensively with the UX and business team
                                    to ensure the applications were user friendly and responsive.
                                </p>

                                <ul className="ml-6 space-y-2 list-disc">
                                    <li>Actively participate in a Scaled Agile Framework including Sprint Planning and Backlog Refinement.</li>
                                    <li>Developed solutions for user stories in an ATDD environment using Java, JavaScript, jQuery, HTML, CSS, Spring Webflow and Apache Tiles.</li>
                                    <li>Wrote JUnit tests to ensure code reliability and reduce production issues using JUnit.</li>
                                    <li>Utilize Continuous Integration Tools for deployments streamlining deployments.</li>
                                    <li>Managed dependencies and builds with Maven, enhancing software maintainability</li>
                                </ul>

                                <p>
                                    <Comment>// Main Technologies: JavaScript, jQuery, Apache Tiles, Spring Webflow, Java, Spring MVC, HTML, CSS, Bitbucket, Jira</Comment>
                                </p>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-medium">
                                    <Property>Automation Developer</Property> at <String>BBVA</String>
                                </h3>
                                <p className="text-sm opacity-75">
                                    <Keyword>2018 - 2019</Keyword> | <String>Biringham, Al</String>
                                </p>

                                <p>
                                    Started my professional journey in a collaborative environment.
                                    Focused on <Property>automated testing</Property> while learning
                                    <Keyword> industry best practices</Keyword> and <Keyword>collaborative workflows</Keyword>.
                                </p>

                                <ul className="ml-6 space-y-2 list-disc">
                                    <li>Actively participate in an Agile Scrum environment including Sprint Planning and Daily Scrum.</li>
                                    <li>Identified and reported defects via Jira, collaborating with engineers to resolve issues.</li>
                                    <li>Performed RESTful API testing with Java RestAssured and JUnit, ensuring backend reliability.</li>
                                    <li>Perform Backend Testing by developing and executing complex SQL queries in an Oracle Database.</li>
                                    <li>Built Spring Boot tools to manage test data sanitation and creation, reducing manual effort.</li>
                                    <li>Converted design mockups into pixel-perfect web interfaces.</li>
                                </ul>

                                <p>
                                    <Comment>// Main Technologies: JavaScript, jQuery, Java, Spring MVC, Spring Boot, HTML, CSS, Bitbucket, Jira</Comment>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold">
                            <Function>Skills & Expertise</Function>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium mb-2"><Property>Frontend</Property></h4>
                                <p>
                                    <String>
                                        React • TypeScript • HTML5 • CSS3 • Tailwind CSS • JavaScript 
                                        • jQuery • Redux • Apache Tiles • Spring Webflow • Cloud Front 
                                        • API Gateway • AppSync • Spring MVC • Spring Boot • Bitbucket 
                                        • Jira • Cypress
                                    </String>
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2"><Property>Backend</Property></h4>
                                <p>
                                    <String>Python • Java • AWS Lambda • Step Functions</String>
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2"><Property>Database</Property></h4>
                                <p>
                                    <String>PostgreSQL • DynamoDB • SQL Server • Athena</String>
                                </p>
                            </div>

                            <div>
                                <h4 className="font-medium mb-2"><Property>Tools & Others</Property></h4>
                                <p>
                                    <String>
                                        ChatGPT • Cursor • Git • AWS • Docker • BitBucket • Jira • Figma 
                                        • Cognito • IAM • Selenium • API Gateway • AppSync 
                                        • S3 • Athena • Step Functions • DynamoDB • SQL Server
                                        • Event Bridge • CloudWatch
                                        </String>
                                </p>
                            </div>
                        </div>

                        <p>
                            <Comment>// Always learning and adapting to new technologies</Comment>
                        </p>
                    </section>
                </div>
            </VSCodeHighlight>
        </CodeEditor>
    );
};

export default Experience; 