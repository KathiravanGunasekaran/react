import { core_concepts } from "../data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import { EXAMPLES } from "../data-with-examples";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {core_concepts.map((core_concept) => {
              return <CoreConcept key={core_concept.title} {...core_concept} />;
            })}
            {/* <CoreConcept
              image={core_concepts[0].image}
              title={core_concepts[0].title}
              description={core_concepts[0].description}
            />
            <CoreConcept {...core_concepts[1]} />
            <CoreConcept {...core_concepts[2]} />
            <CoreConcept {...core_concepts[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onSelect={() => handleSelect("components")}
              isSelected={tabContent === "components" ? true : false}
            >
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")} isSelected={tabContent === "jsx" ? true : false}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleSelect("props")} isSelected={tabContent === "props" ? true : false}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleSelect("state")} isSelected={tabContent === "state" ? true : false}>
              State
            </TabButton>
          </menu>
          {tabContent === undefined ? <p>Please select a Topic</p> : null}
          {tabContent !== undefined ? (
            <div id="tab-content">
              <h3>{EXAMPLES[tabContent].title}</h3>
              <p>{EXAMPLES[tabContent].description}</p>
              <pre>
                <code>{EXAMPLES[tabContent].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}

export default App;
