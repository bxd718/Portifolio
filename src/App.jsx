import "./index.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

import { FaJava, FaJs, FaReact, FaMobileAlt, FaDatabase, FaFire, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export default function App() {
  return (
    <div className="App">
      {/* HEADER componente */}
      <Header />

      {/* Main sections */}
      <main>

        <Section 
            title="Minhas habilidades "
            subtitle="Com desenvolvimento!"
        >

        <ListItem 
            MyComponent icon={FaJava} 
            href="https://www.java.com/en/" 
        />
        
        <ListItem 
            MyComponent icon={FaMobileAlt} 
            href="https://developer.android.com" 
        />

        <ListItem 
            MyComponent icon={FaJs} 
            href="https://www.javascript.com"
        />

        <ListItem 
            MyComponent icon={SiTypescript} 
            href="https://www.typescriptlang.org"
        />

        </Section>

      <Section 
            title="Minhas habilidades "
            subtitle="Com frameworks!"
        >

        
      <ListItem 
            MyComponent icon={FaReact} 
            href="https://react.dev" 
        />
        
        <ListItem 
            MyComponent icon={FaJava} 
            href="https://spring.io" 
        />

        <ListItem 
            MyComponent icon={FaMobileAlt} 
            href="https://reactnative.dev" 
        />


      </Section>

      <Section 
            title="Minhas habilidades "
            subtitle="Com base de Dados!"
      >

      <ListItem 
            MyComponent icon={FaDatabase} 
            href="https://www.mysql.com" 
        />

        <ListItem 
            MyComponent icon={FaFire} 
            href="https://firebase.google.com/?hl=pt" 
        />

        </Section>

      <Section 
            title="Minhas redes"
            subtitle="Se conecte comigo agora mesmo!"
      >   

      <ListItem 
            MyComponent icon={FaLinkedin} 
            href="https://www.linkedin.com/in/edson-langa/" 
        />

        <ListItem 
            MyComponent icon={FaGithub} 
            href="https://github.com/bxd718" 
        />

      <ListItem 
            MyComponent icon={FaWhatsapp} 
            href="https://api.whatsapp.com/send/?phone=820978401" 
        />

        <ListItem 
            MyComponent icon={FaEnvelope} 
            href="https://mailto:edsonfenias718@gmail.com" 
        />

       
        

      </Section>
        

      </main>
    </div>
  );
}
