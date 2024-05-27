import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <header>
        <Counter />
    </header>
    <div className="container">
        <aside>
            侧边栏
        </aside>
        <section>
            自适应主内容区
        </section>
    </div>
    </div>
  );
}

export default App;
