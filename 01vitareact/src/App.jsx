import MyButton from "./Mybuttom" // Assuming MyButton.js is in the same folder

function AboutPage() {
  return (
    <>
      <h1>About This Page</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Hello! Good Morning.</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}

export default App;
