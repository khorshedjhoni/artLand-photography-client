import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='question-blog'>
                <h3>Question-1: what is the difference between SQL and NoSQL?</h3>
                <p>Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.NoSQL databases need not stick to this format, but generally fit into one of four broad categories:QL databases represent massive communities, stable code bases, and proven standards. Multitudes of examples are posted online and experts are available to support those new to programming relational data.NoSQL technologies are being adopted quickly, but communities remain smaller and more fractured. However, many SQL languages are proprietary or associated with large single-vendors, while NoSQL communities benefit from open systems and concerted commitment to onboarding users.</p>
            </div>
            <div className='question-blog'>
                <h3>Question-2: What is JWT, and how does it work?</h3>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className='question-blog'>
                <h3> Question-3: What is the difference between javascript and NodeJS?</h3>
                <p>NodeJS is a cross-platform and open source Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Javascript can run in any browser engine as like JS core in safari and Spider monkey in Firefox.V8 is the Javascript engine inside of node.js that parses and runs Javascript.	Javascript is used in frontend development.Nodejs is used in server-side development </p>
            </div>
            <div className='question-blog'>
                <h3>Question-4: How does NodeJS handle multiple requests at the same time?</h3>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
The cluster module allows easy creation of child processes that all share the same server ports.</p>
            </div>
        </div>
    );
};

export default Blog;