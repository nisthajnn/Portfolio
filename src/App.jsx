import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
// import Testinomials from "./components/Testinomials";

export default function App() {
  return (
    <main>
		<div class="area">
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			</div>
		<Navbar />
      <div class="area">
			<ul class="circles list-none">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			
			</ul>
			</div>
      <About />
	  <Skills />
      <Projects /> 
	 
      
	 
      {/* <Testinomials /> */}
	
      <Contact />
	  <Footer></Footer>
    </main>
  );
}