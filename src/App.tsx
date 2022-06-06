import { Table } from "./Table";
import { services } from "./data";

function App() {
  return (
    <div>
      <Table data={services} />
    </div>
  );
}

export default App;
